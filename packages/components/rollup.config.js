import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import copy from 'rollup-plugin-copy';
import autoprefixer from 'autoprefixer';

export default [
  {
    input: 'index.ts',
    output: [
      {
        format: 'esm',
        file: './dist/index.esm.js',
        sourcemap: true,
      },
    ],
    external: ['react', 'react-dom'],
    plugins: [
      commonjs(),
      postcss({
        plugins: [autoprefixer()],
        extract: false,
        modules: true,
        use: ['css'],
      }),
      copy({
        targets: [
          { src: '../../shared/fonts/**/*', dest: 'dist/fonts' },
        ],
      }),
      typescript({ tsconfig: './tsconfig.json' }),
    ],
  }
];
