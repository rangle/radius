import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import copy from 'rollup-plugin-copy';

const packageJson = require('./package.json');
export default [
    {
        input: 'src/index.ts',
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
        watch: {
            skipWrite: false,
            clearScreen: false,
            include: 'src/**/*'
        },
        plugins: [
            resolve(),
            commonjs(),
            copy({
                targets: [
                    { src: 'src/custom.d.ts', dest: 'dist' },
                    { src: 'src/fonts/**/*', dest: 'dist/fonts' }
                ]
            }),
            typescript({ tsconfig: './tsconfig.json' })
        ]
    },
    // {
    //     input: 'dist/types/index.d.ts',
    //     output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    //     plugins: [
    //         dts(),
    //         copy({
    //             targets: [
    //                 { src: 'dist/types/**/*d.ts', dest: 'dist' }
    //             ]
    //         })
    //     ],
    //     external: [/\.scss$/],
    //     watch: {
    //         skipWrite: false,
    //         clearScreen: false,
    //         include: 'src/**/*'
    //     }
    // }
];
