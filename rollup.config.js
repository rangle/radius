import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import postcss from 'rollup-plugin-postcss';
import copy from 'rollup-plugin-copy';

const packageJson = require('./package.json');
const path = require('path');

import { readdirSync, statSync } from 'fs'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const checkPathLevels = (dirPath, componentKey, filesArray, file) => {
    const compDirectory = dirPath.split("/");
    if (componentKey === 'src') {
        filesArray['index'] = path.join('', dirPath, "/", file);
    }

    if (compDirectory.length > 3) {
        filesArray[componentKey] = path.join('', dirPath, "/", file);
    }
    return filesArray;
}

const getFilePaths = (dirPath, filesArray) => {
    const files = readdirSync(dirPath);
    filesArray = filesArray || [];
    files.forEach((file) => {
        if (statSync(dirPath + "/" + file).isDirectory()) {
            filesArray = getFilePaths(dirPath + "/" + file, filesArray);
        } else {
            if (file.includes('index.ts')) {
                const compDirectory = dirPath.split("/");
                const componentKey = compDirectory[compDirectory.length - 1]
                filesArray = checkPathLevels(dirPath, componentKey, filesArray, file);
            }
        }
    })
    return filesArray;
}

const componentPaths = Object.assign({}, getFilePaths('./src'));

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
