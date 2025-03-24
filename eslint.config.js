import { defineConfig } from 'eslint';

export default defineConfig({
    languageOptions: {
        globals: {
            es6: true,
            browser: true
        }
    },
    extends: [
        "eslint:recommended",
        "plugin:prettier/recommended"
    ],
    plugins: [
        "prettier"
    ],
    rules: {
        "quotes": ["error", "single"],  // Enforces single quotes for strings
        "prettier/prettier": ["error"]  
        // Enforces Prettier's formatting rules
}
});
