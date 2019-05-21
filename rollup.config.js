import svelte from 'rollup-plugin-svelte'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import postcss from 'rollup-plugin-postcss'
import browsersync from 'rollup-plugin-browsersync'
import { terser } from 'rollup-plugin-terser'
import tailwind from 'tailwindcss'
import purgecss from '@fullhuman/postcss-purgecss'

const production = !process.env.ROLLUP_WATCH

export default {
  input: 'src/main.js',
  output: {
    file: 'public/dist/main.js',
    format: 'esm',
  },
  plugins: [
    svelte({
      dev: !production,
    }),
    resolve(),
    commonjs(),
    postcss({
      extract: true,
      minimize: production,
      plugins: [
        tailwind(),
        production && purgecss({
          content: [
            './public/**/*.html',
            './src/**/*.svelte',
          ],
          defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
        }),
      ],
    }),
    ...production
      ? [
        terser(),
      ] : [
        browsersync({ server: 'public' }),
      ],
  ],
}
