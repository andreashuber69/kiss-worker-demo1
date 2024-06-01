import { createFibonacciWorker } from "./createFibonacciWorker.ts";

// Start a new worker thread waiting for work.
const worker = createFibonacciWorker();

// Send the argument (40) to the worker thread, where it will be passed
// to our function. In the mean time we're awaiting the returned promise,
// which will eventually fulfill with the result calculated on the worker
// thread.
const result = await worker.execute(40);

const element = document.querySelector("h1");

if (element) {
    element.textContent = `${result}`;
}
