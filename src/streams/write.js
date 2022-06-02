import { createWriteStream } from "fs";
import * as path from "path";

export const write = async () => {
  // Write your code here
  const pathToFile = path.join(path.resolve(), "files", "fileToWrite.txt");
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