import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const desktopRoot = path.resolve(scriptDir, "..");

test("Tauri dev server opens the app surface", async () => {
  const configPath = path.join(desktopRoot, "src-tauri", "tauri.conf.json");
  const config = JSON.parse(await readFile(configPath, "utf8"));

  assert.equal(config.build.devUrl, "http://localhost:6900/app");
});
