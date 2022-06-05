import * as path from "path";
import { Worker } from "worker_threads";
import { cpus } from "os";
import { fileURLToPath } from "url";

export const performCalculations = async () => {
  // Write your code here
  const coresTotal = cpus().length;
  const pathToFolder = path.dirname(fileURLToPath(import.meta.url));

  function runService(workerData) {
    return new Promise((resolve, reject) => {
      const worker = new Worker(path.join(pathToFolder, "./worker.js"), {
        workerData,
      });
      worker.on("message", resolve);
      worker.on("error", reject);
      worker.on("exit", (code) => {
        if (code !== 0)
          reject(new Error(`Worker stopped with exit code ${code}`));
      });
    });
  }
  async function run(n) {
    return runService(n)
      .then((res) => {
        return { status: "resolved", data: res };
      })
      .catch(() => {
        return { status: "error", data: null };
      });
  }
  const runWork = (n) => {
    const promiseArr = [];
    let START_FROM = 10;
    for (let i = 0; i < n; i++) {
      promiseArr.push(run(START_FROM).catch((err) => console.log(err)));
      START_FROM++;
    }
    return promiseArr;
  };

  Promise.all(runWork(coresTotal)).then((result) => {
    console.log(result);
  });
};

performCalculations();
