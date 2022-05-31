import { cp } from "fs";
import * as path from "path";

export const copy = async () => {
  // Write your code here
  const src = path.join(path.resolve(), "files");
  const dest = path.join(path.resolve(), "files_copy");
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
