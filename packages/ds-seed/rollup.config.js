import typescript from "@rollup/plugin-typescript";
import external from "rollup-plugin-peer-deps-external";

import packageJson from "./package.json";

export default {
 input: './src/index.ts',
 output: [
    {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true
    },
 ],
 plugins: [
     external(),
     typescript(),
 ],
}