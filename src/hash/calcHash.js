const { createHash } = await import("crypto");
import { readFile } from "fs";
import * as path from "path";

export const calculateHash = async () => {
  // Write your code here
  const fileName = path.join(
    path.resolve(),
    "files",
    "fileToCalculateHashFor.txt"
  );
  readFile(fileName, (err, data) => {
    if (err) throw new Error("FS operation failed");
    const hash = createHash("sha256");
    hash.update(data.toString());
    console.log(hash.copy().digest("hex"));
    return hash.copy().digest("hex");
  });
};

//for debug
calculateHash();
