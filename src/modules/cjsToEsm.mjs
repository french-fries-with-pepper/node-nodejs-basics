import * as path from "path";
import { readFile } from "fs/promises";
import { release, version } from "os";
import { createServer as createServerHttp } from "http";
import { fileURLToPath } from "url";

import "./files/c.js";
const random = Math.random();

let unknownObject;
const pathToFolder = path.dirname(fileURLToPath(import.meta.url));

const fileToImport =
  random > 0.5
    ? path.join(pathToFolder, "files", "a.json")
    : path.join(pathToFolder, "files", "b.json");

unknownObject = JSON.parse(
  await readFile(new URL(fileToImport, import.meta.url))
);

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${fileURLToPath(import.meta.url)}`);
console.log(`Path to current directory is ${path.resolve()}`);

const createMyServer = createServerHttp((_, res) => {
  res.end("Request accepted");
});

export default {
  unknownObject,
  createMyServer,
};
