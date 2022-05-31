import { readFile } from 'fs';
import * as path from "path";

export const read = async () => {
    // Write your code here 
    const fileName = path.join(path.resolve(),"files","fileToRead.txt");
    readFile(fileName,(err,data)=>{
        if(err) throw new Error("FS operation failed");
        console.log(data.toString());
    })
};

//for debug
read();