import { defineConfig } from "vite";

export default defineConfig({
    build: {
        // The target setting only needs to be modified to support
        // top-level await (which is used in main.ts for simplicity).
        // If you refrain from using top-level await, the default target
        // will work just fine.
        target: "es2022",
    },
});
