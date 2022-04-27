import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import postcss from 'rollup-plugin-postcss';
import copy from 'rollup-plugin-copy';

const packageJson = require('./package.json');
export default [
    {
        input: {
            index: 'src/index.ts',
            box: 'src/components/box/index.ts',
            button: 'src/components/button/index.ts',
            tag: 'src/components/tag/index.ts'
        },
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
