import { createWriteStream } from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

export const write = async () => {
  // Write your code here
  const pathToFolder = path.dirname(fileURLToPath(import.meta.url));

  const pathToFile = path.join(pathToFolder, "files", "fileToWrite.txt");
  const writeStream = createWriteStream(pathToFile);
  writeStream.on("error", (err) => {
    throw new Error("FS operation failed");
  });
  writeStream.on("finish", () => {
    process.emit();
  });
  process.stdin.on("data", (data) => {
    writeStream.write(data);
  });
};
//for debug
write();