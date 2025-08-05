import { FlatCompat } from '@eslint/eslintrc'
import { fileURLToPath } from 'url'
import path from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const compat = new FlatCompat({ baseDirectory: __dirname })

export default [
  ...compat.config({
    plugins: ['@typescript-eslint', 'prettier'],
    extends: [     
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier',
      'prettier',],
    env: { node: true, es2021: true },
    parser: '@typescript-eslint/parser',
    parserOptions: {
      project: ['./tsconfig.json'], // enables type-aware linting
      tsconfigRootDir: __dirname,
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
  }),
  {
    ignores: ['node_modules/', 'dist/', 'build/', '*.js'],
  },
]