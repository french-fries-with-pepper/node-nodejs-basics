import { cp } from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

export const copy = async () => {
  // Write your code here
  const pathToFolder = path.dirname(fileURLToPath(import.meta.url));

  const src = path.join(pathToFolder, "files");
  const dest = path.join(pathToFolder, "files_copy");
  cp(
    src,
    dest,
    { recursive: true, force: false, errorOnExist: true },
    (err) => {
      if (err) throw new Error("FS operation failed");
      //for debug
      //console.log("Success copied");
    }
  );
};

copy();
