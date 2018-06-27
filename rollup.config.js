import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import pkg from './package.json'

process.env.BABEL_ENV = 'main'

export default {
  input: 'src/index.js',
  output: {
    name: 'js-utils',
    file: pkg.main,
    format: 'cjs'
  },
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**'
    }),
    commonjs()
  ]
}
