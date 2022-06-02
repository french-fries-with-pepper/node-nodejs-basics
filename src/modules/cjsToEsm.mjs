import * as path from "path";
import { release, version } from "os";
import { createServer as createServerHttp } from "http";
import { fileURLToPath } from "url";
//require('./files/c');

const random = Math.random();

let unknownObject;

/* if (random > 0.5) {
    unknownObject = require('./files/a.json');
} else {
    unknownObject = require('./files/b.json');
} */

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${fileURLToPath(import.meta.url)}`);
console.log(`Path to current directory is ${path.resolve()}`);

export const createMyServer = createServerHttp((_, res) => {
  res.end("Request accepted");
});

/* module.exports = {
    unknownObject,
    createMyServer,
}; */
