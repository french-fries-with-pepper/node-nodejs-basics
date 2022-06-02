import { createReadStream } from "fs";
import * as path from "path";


export const read = async () => {
  // Write your code here
  const pathToFile = path.join(path.resolve(),"files","fileToRead.txt");
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