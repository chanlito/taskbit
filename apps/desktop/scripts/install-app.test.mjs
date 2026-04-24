import assert from "node:assert/strict";
import { mkdir, mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import test from "node:test";

import { installAppBundle, resolveAppInstallPaths } from "./install-app.mjs";

test("resolveAppInstallPaths uses the built Taskbit app and Applications destination by default", () => {
  const desktopRoot = "/repo/apps/desktop";

  const paths = resolveAppInstallPaths({ desktopRoot });

  assert.equal(
    paths.source,
    "/repo/apps/desktop/src-tauri/target/release/bundle/macos/Taskbit.app",
  );
  assert.equal(paths.destination, "/Applications/Taskbit.app");
});

test("resolveAppInstallPaths supports source and destination overrides", () => {
  const paths = resolveAppInstallPaths({
    desktopRoot: "/repo/apps/desktop",
    env: {
      TASKBIT_APP_BUNDLE: "/tmp/Taskbit.app",
      TASKBIT_APPLICATIONS_DIR: "/tmp/Applications",
    },
  });

  assert.equal(paths.source, "/tmp/Taskbit.app");
  assert.equal(paths.destination, "/tmp/Applications/Taskbit.app");
});

test("installAppBundle replaces the destination app bundle", async () => {
  const tmpRoot = await mkdtemp(path.join(os.tmpdir(), "taskbit-install-"));
  const source = path.join(tmpRoot, "Taskbit.app");
  const destination = path.join(tmpRoot, "Applications", "Taskbit.app");

  await mkdir(path.join(source, "Contents"), { recursive: true });
  await mkdir(path.join(destination, "Contents"), { recursive: true });
  await writeFile(path.join(source, "Contents", "Info.plist"), "new app");
  await writeFile(path.join(destination, "Contents", "Info.plist"), "old app");

  try {
    await installAppBundle({ source, destination });

    assert.equal(
      await readFile(path.join(destination, "Contents", "Info.plist"), "utf8"),
      "new app",
    );
  } finally {
    await rm(tmpRoot, { recursive: true, force: true });
  }
});
