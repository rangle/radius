import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import postcss from 'rollup-plugin-postcss';
import copy from 'rollup-plugin-copy';
import path from 'path';

import { readdirSync, statSync } from 'fs'

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const checkPathLevels = (dirPath, componentKey, arrayOfFiles, file) => {
    const sPath = dirPath.split("/");
    if (componentKey === 'src') {
        arrayOfFiles['index'] = path.join('', dirPath, "/", file);
    }

    if (sPath.length > 3) {
        arrayOfFiles[componentKey] = path.join('', dirPath, "/", file);
    }
    return arrayOfFiles;
}

const getFiles = (dirPath, arrayOfFiles) => {
    const files = readdirSync(dirPath);
    arrayOfFiles = arrayOfFiles || [];
    files.forEach((file) => {
        if (statSync(dirPath + "/" + file).isDirectory()) {
            arrayOfFiles = getFiles(dirPath + "/" + file, arrayOfFiles);
        } else {
            if (file.includes('index.ts')) {
                const sPath = dirPath.split("/");
                const componentKey = sPath[sPath.length - 1]
                arrayOfFiles = checkPathLevels(dirPath, componentKey, arrayOfFiles, file);
            }
        }
    })
    return arrayOfFiles;
}

const componentPaths = Object.assign({}, getFiles('./src'));

export default [
    {
        input: componentPaths,
        output: [{
            dir: 'dist',
            format: 'cjs',
            sourcemap: true,
            preserveModules: true
        },
        {
            dir: 'dist',
            format: 'esm',
        }],
        external: ['react', 'react-dom'],

        plugins: [
            resolve(),
            commonjs(),
            postcss({
                extract: false,
                modules: true,
                use: ['sass']
            }),
            copy({
                targets: [
                    { src: 'src/custom.d.ts', dest: 'dist' }
                ]
            }),
            typescript({ tsconfig: './tsconfig.json' })
        ]
    },
    {
        input: 'dist/types/index.d.ts',
        output: [{ file: 'dist/index.d.ts', format: 'esm' }],
        plugins: [
            dts(),
            copy({
                targets: [
                    { src: 'dist/types/**/*d.ts', dest: 'dist' }
                ]
            })
        ],
        external: [/\.scss$/]
    }
];
