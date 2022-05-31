import { rm } from "fs";
import * as path from "path";

export const remove = async () => {
  // Write your code here
  const pathToRemove = path.join(path.resolve(), "files", "fileToRemove.txt");
  rm(pathToRemove, {}, (err) => {
    if (err) throw new Error("FS operation failed");
    //for debug
    //console.log("Success removed");
  });
};
//for debug
remove();
