import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

import pkg from './package.json';

export default [
  {
    input: 'src/index.js',
    output: {
      file: pkg.main,
      format: 'cjs'
    },
    plugins: [
      resolve(),
      commonjs(),
      babel({
        exclude: 'node_modules/**',
        babelrc: false,
        presets: [
          [
            '@babel/env',
            {
              modules: false,
              targets: 'maintained node versions'
            }
          ]
        ]
      })
    ]
  },
  {
    input: 'src/index.js',
    output: {
      file: pkg.browser,
      format: 'umd',
      name: 'randomFruit'
    },
    plugins: [
      resolve(),
      commonjs(),
      babel({
        exclude: 'node_modules/**'
      })
    ]
  },
  {
    input: 'src/index.js',
    output: {
      file: pkg.browser.replace(/\.js$/, '.min.js'),
      format: 'umd',
      name: 'randomFruit'
    },
    plugins: [
      resolve(),
      commonjs(),
      babel({
        exclude: 'node_modules/**'
      }),
      terser()
    ]
  },
  {
    input: 'src/index.js',
    output: {
      file: pkg.module,
      format: 'es'
    },
    plugins: [
      resolve(),
      commonjs(),
      babel({
        exclude: 'node_modules/**'
      })
    ]
  }
];
// external: ['lodash/random'] for peerDependencies config
