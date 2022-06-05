import { createReadStream } from "fs";
import * as path from "path";
import { fileURLToPath } from "url";


export const read = async () => {
  // Write your code here
  const pathToFolder = path.dirname(fileURLToPath(import.meta.url));
  const pathToFile = path.join(pathToFolder,"files","fileToRead.txt");
  const readSteam = createReadStream(pathToFile,"utf8");
  readSteam.on("error",()=>{
      throw new Error("FS operation failed");
  })
  readSteam.on("data",(chunk)=>{
      console.log(chunk);
  })
};
//for debug
read();