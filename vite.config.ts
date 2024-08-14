/// <reference types="node" />

import path from "node:path"

import solid from "vite-plugin-solid"

import { defineConfig } from "vite"

export default defineConfig({
    plugins: [solid()],
    resolve: {
        alias: {
            app: path.resolve(__dirname, "src")
        }
    }
})
