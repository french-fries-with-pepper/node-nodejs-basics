import * as path from "path";
import { fork } from "child_process";
import { fileURLToPath } from "url";

export const spawnChildProcess = async (args) => {
  // Write your code here
  const pathToFolder = path.dirname(fileURLToPath(import.meta.url));
  const modulePath = path.join(pathToFolder, "files", "script");
  const child = fork(modulePath, [...args], { silent: true });
  process.stdin.on("data", (data) => {
    child.stdin.write(data);
  });
  child.stdout.on("data", (data) => {
    process.stdout.write(data);
  });
  child.on("exit", () => {
    console.log("child process was ended, so nothing to do...");
    process.exit(0);
  });
};

spawnChildProcess(["A", "B", "C"]);
