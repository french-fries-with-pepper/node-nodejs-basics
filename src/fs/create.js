import { writeFile, stat } from "fs";
import { Buffer } from "buffer";
import * as path from "path";

export const create = async () => {
  // Write your code here
  const msg = "I am fresh and young\n";
  const fileName = "fresh.txt";
  const p = path.join(path.resolve(), "files", fileName);
  const data = new Uint8Array(Buffer.from(msg));
  stat(p, (err) => {
    if (err) {
      writeFile(p, data, (err) => {
        if (err) throw new Error("FS operation failed");
        //for debug
        //console.log("Success create");
      });
    } else {
      throw new Error("FS operation failed");
    }
  });
};

//for debug
create();
