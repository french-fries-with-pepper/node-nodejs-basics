import { readdir } from "fs";
import * as path from "path";

export const list = async () => {
    // Write your code here 
    const pathToDir = path.join(path.resolve(),"files");
    readdir(pathToDir,(err,files) => {
        if (err) throw new Error("FS operation failed");
        console.log(files.join("\n"));
    });
};

//for debug
list();