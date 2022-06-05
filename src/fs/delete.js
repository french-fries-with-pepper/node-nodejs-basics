import { rm } from "fs";
import * as path from "path";
import { fileURLToPath } from "url";


export const remove = async () => {
  // Write your code here
  const pathToFolder = path.dirname(fileURLToPath(import.meta.url));
  const pathToRemove = path.join(pathToFolder, "files", "fileToRemove.txt");
  rm(pathToRemove, {}, (err) => {
    if (err) throw new Error("FS operation failed");
    //for debug
    //console.log("Success removed");
  });
};
//for debug
remove();
