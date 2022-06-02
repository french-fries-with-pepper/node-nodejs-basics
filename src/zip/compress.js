import { createReadStream, createWriteStream } from "fs";
import * as zlib from "zlib";
import * as path from "path";

export const compress = async () => {
  // Write your code here
  const inputPath = path.join(path.resolve(), "files", "fileToCompress.txt");
  const outPath = path.join(path.resolve(), "files", "archive.gz");
  const readSteam = createReadStream(inputPath);
  const writeStream = createWriteStream(outPath);
  const gzipStream = zlib.createGzip();

  readSteam.on("error", () => {
    throw new Error("FS operation failed");
  });
  writeStream.on("error", () => {
    throw new Error("FS operation failed");
  });

  readSteam.pipe(gzipStream).pipe(writeStream);
};

compress();
