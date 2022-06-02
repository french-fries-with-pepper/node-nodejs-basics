import { Transform } from "stream";

export const transform = async () => {
  // Write your code here
  const reverseStream = new Transform({
    transform(chunk, encoding, callback) {
      callback(null, chunk.toString().split("").reverse().join(""));
    },
  });
  
  process.stdin.pipe(reverseStream).pipe(process.stdout);
};
//for debug
transform();