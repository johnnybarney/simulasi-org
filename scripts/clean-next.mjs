import { execSync } from "node:child_process";
import { rmSync } from "node:fs";
import { resolve } from "node:path";

try {
  execSync("taskkill /F /IM node.exe", { stdio: "ignore" });
} catch {
  // No running node processes.
}

const nextDir = resolve(".next");

try {
  rmSync(nextDir, { recursive: true, force: true });
} catch {
  execSync(`cmd /c rmdir /s /q "\\\\?\\${nextDir}"`, { stdio: "inherit" });
}

console.log("Cleaned .next folder.");
