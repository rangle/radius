import typescript from "@rollup/plugin-typescript";
import external from "rollup-plugin-peer-deps-external";


export default {
 input: './src/index.ts',
 output: [
     {
         file: "build/index.cjs.js",
         format: "cjs",
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