import { createReadStream, createWriteStream } from "fs";
import * as zlib from "zlib";
import * as path from "path";
import { fileURLToPath } from "url";

export const decompress = async () => {
  // Write your code here
  const pathToFolder = path.dirname(fileURLToPath(import.meta.url));
  const inputPath = path.join(pathToFolder, "files", "archive.gz");
  const outPath = path.join(pathToFolder, "files", "fileToCompress.txt");
  const readSteam = createReadStream(inputPath);
  const writeStream = createWriteStream(outPath);
  const gzipUnpackStream = zlib.createUnzip();

  readSteam.on("error", () => {
    throw new Error("FS operation failed");
  });
  writeStream.on("error", () => {
    throw new Error("FS operation failed");
  });

  readSteam.pipe(gzipUnpackStream).pipe(writeStream);
};

decompress();