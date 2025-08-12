const js = require('@eslint/js');
const importPlugin = require('eslint-plugin-import');
const unusedImports = require('eslint-plugin-unused-imports');
const globals = require('globals');

module.exports = [
  // Ignore build/system folders
  { ignores: ['node_modules', 'dist', 'build', '.venv'] },

  // Base recommended rules
  js.configs.recommended,

  // JS files config
  {
    files: ['**/*.{js,jsx,mjs,cjs}'],
    languageOptions: {
      globals: { ...globals.node, ...globals.browser }, // <-- fixes 'console' etc.
    },
    plugins: { import: importPlugin, 'unused-imports': unusedImports },
    rules: {
      'no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'error',
      'import/order': [
        'warn',
        { alphabetize: { order: 'asc' }, 'newlines-between': 'always' },
      ],
    },
  },
];
