import { access, cp, mkdir, rm, stat } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

const scriptPath = fileURLToPath(import.meta.url);
const defaultDesktopRoot = path.resolve(path.dirname(scriptPath), "..");
const appName = "Taskbit.app";

export function resolveAppInstallPaths({
  desktopRoot = defaultDesktopRoot,
  env = process.env,
} = {}) {
  const source =
    env.TASKBIT_APP_BUNDLE ??
    path.join(
      desktopRoot,
      "src-tauri",
      "target",
      "release",
      "bundle",
      "macos",
      appName,
    );
  const applicationsDir = env.TASKBIT_APPLICATIONS_DIR ?? "/Applications";

  return {
    source,
    destination: path.join(applicationsDir, appName),
  };
}

export async function installAppBundle({ source, destination }) {
  const sourceStats = await stat(source);

  if (!sourceStats.isDirectory()) {
    throw new Error(`Expected app bundle directory at ${source}`);
  }

  await mkdir(path.dirname(destination), { recursive: true });
  await rm(destination, { recursive: true, force: true });
  await cp(source, destination, { recursive: true });
  await access(destination);
}

async function main() {
  if (process.platform !== "darwin") {
    throw new Error("Taskbit.app installation is only supported on macOS.");
  }

  const paths = resolveAppInstallPaths();

  await installAppBundle(paths);

  console.log(`Installed ${paths.source} to ${paths.destination}`);
}

if (process.argv[1] === scriptPath) {
  main().catch((error) => {
    console.error(error.message);
    process.exitCode = 1;
  });
}
