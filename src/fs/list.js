import { readdir } from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

export const list = async () => {
  // Write your code here
  const pathToFolder = path.dirname(fileURLToPath(import.meta.url));
  const pathToDir = path.join(pathToFolder, "files");
  readdir(pathToDir, (err, files) => {
    if (err) throw new Error("FS operation failed");
    console.log(files.join("\n"));
  });
};

//for debug
list();
