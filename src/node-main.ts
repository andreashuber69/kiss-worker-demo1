import { createFibonacciWorker } from "./createFibonacciWorker.ts";

const worker = createFibonacciWorker();
console.log(await worker.execute(40));
worker.terminate();
