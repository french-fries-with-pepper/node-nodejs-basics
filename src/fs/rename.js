import { stat } from "fs";
import {rename as fsRename } from "fs"
import { fileURLToPath } from "url";
import * as path from "path";

export const rename = async () => {
  // Write your code here
  const pathToFolder = path.dirname(fileURLToPath(import.meta.url));

  const oldPath = path.join(pathToFolder, "files", "wrongFilename.txt");
  const newPath = path.join(pathToFolder, "files", "properFilename.md");
  stat(newPath, (err) => {
    if (err) {
      fsRename(oldPath, newPath, (err) => {
        if (err) throw new Error("FS operation failed");
        //for debug
        //console.log("Success rename");
      });
    } else {
      throw new Error("FS operation failed");
    }
  });
};
//for debug
rename();