import typescript from "@rollup/plugin-typescript";
import external from "rollup-plugin-peer-deps-external";

import packageJSON from "./package.json";

export default {
 input: './src/index.ts',
 output: [
     {
         name: packageJSON.name,
         file: "build/index.umd.js",
         format: "umd",
         sourcemap: true
     },
     {
        file: "build/index.esm.js",
        format: "esm",
        sourcemap: true
    },
 ],
 plugins: [
     external(),
     typescript(),
 ],
}