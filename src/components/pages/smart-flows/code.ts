// prettier-ignore

export const codeExample1 = `
/// <reference types="node" />

export default defineConfig({
    plugins: [solid()],
    resolve: {
        alias: {
            app: path.resolve(__dirname, "src")
        }
    }
})
`
