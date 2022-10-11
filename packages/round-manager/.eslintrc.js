module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react/jsx-runtime",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  root: true,
  rules: {
    "react/no-unescaped-entities": ["error", { forbid: [">", "}"] }],
    "@typescript-eslint/no-explicit-any": "off",
  },
  overrides: [
    {
      files: ["**/*.test.{ts,tsx}"],
      rules: {
        "@typescript-eslint/no-unused-vars": [
          "warn",
          {
            varsIgnorePattern: "^_$",
            destructuredArrayIgnorePattern: "^_$",
            argsIgnorePattern: "^_$",
          },
        ],
      },
    },
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
};
