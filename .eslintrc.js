module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: ['plugin:react/recommended', 'standard-with-typescript'],
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: 'tsconfig.json'
    },

    plugins: ['react', '@typescript-eslint'],
    rules: {
        'react/react-in-jsx-scope': 'off',
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        indent: [2, 4],
        '@typescript-eslint/indent': [2, 4],
        'react/jsx-filename-extension': [
            2,
            { extensions: ['.js', '.jsx', '.tsx'] }
        ],
        '@typescript-eslint/prefer-nullish-coalescing': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/strict-boolean-expressions': 'off',
        'import/no-unresolved': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'warn',
        '@typescript-eslint/no-unused-vars': 'warn',
        'react/jsx-props-no-spreading': 'warn',
        'react/require-default-props': 'off',
        'react/function-component-definition': 'off',
        'no-shadow': 'off',
        '@typescript-eslint/naming-convention': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
        quotes: [2, 'single', { avoidEscape: true }]
    },
    globals: {
        __IS_DEV__: true
    }
}
