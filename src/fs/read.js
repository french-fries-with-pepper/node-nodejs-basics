import { readFile } from "fs";
import { fileURLToPath } from "url";
import * as path from "path";

export const read = async () => {
  // Write your code here
  const pathToFolder = path.dirname(fileURLToPath(import.meta.url));
  const fileName = path.join(pathToFolder, "files", "fileToRead.txt");
  readFile(fileName, (err, data) => {
    if (err) throw new Error("FS operation failed");
    console.log(data.toString());
  });
};

//for debug
read();
