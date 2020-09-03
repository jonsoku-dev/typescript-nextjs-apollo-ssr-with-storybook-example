# Create Project
모든 소스관련된건 src에 우겨넣는다.
```bash
$ npx create-next-app --example with-typescript graphql-nextjs-typescript
$ mkdir src
```

# Add Storybook
```bash
$ npx sb init
```
## main.js
```javascript
module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-viewport",
    "@storybook/preset-create-react-app"
  ]
}
```
## preview.js
```jsx
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/styles/theme';
import { GlobalStyle } from '../src/styles/GlobalStyles';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    options: {
        storySort: (a, b) =>
            a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
    },
};

export const decorators = [
    (Story) => (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Story />
        </ThemeProvider>
    ),
];

```
## Execute
```bash
$ yarn storybook
```

# yarn add
## Dev Dependencies
```bash
$ yarn add -D @storybook/addon-actions @storybook/addon-essentials @storybook/addon-links @storybook/addon-viewport @storybook/preset-create-react-app @storybook/react @graphql-codegen/cli @graphql-codegen/fragment-matcher @graphql-codegen/typescript @graphql-codegen/typescript-operations @graphql-codegen/typescript-react-apollo @types/graphql @types/node @types/react @types/react-dom @types/styled-components @typescript-eslint/eslint-plugin @typescript-eslint/parser babel-plugin-styled-components eslint eslint-config-prettier eslint-plugin-prettier eslint-plugin-react graphql-codegen-typescript-operations prettier typescript
```
## Dependencies
```bash
$ yarn add @apollo/client apollo-link-context apollo-link-error graphql next react react-dom styled-components
```

# rc
## .babelrc
```json
{
  "presets": ["next/babel"],
  "plugins": [["styled-components", { "ssr": true }]]
}
```
## .eslintrc.js
```js
module.exports = {
    parser: "@typescript-eslint/parser", // Specifies the ESLint parser
    parserOptions: {
        ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
        sourceType: "module", // Allows for the use of imports
        ecmaFeatures: {
            jsx: true // Allows for the parsing of JSX
        }
    },
    settings: {
        react: {
            version: "detect" // Tells eslint-plugin-react to automatically detect the version of React to use
        }
    },
    plugins: [
        "@typescript-eslint",
        "prettier"
    ],
    extends: [
        "plugin:react/recommended", // Uses the recommended rules from @eslint-plugin-react
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier"
    ],
    rules: {
        // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
        // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    },
};
```

## .prettierrc.js
```js
module.exports = {
    semi: true,
    trailingComma: "all",
    singleQuote: true,
    printWidth: 120,
    tabWidth: 4
};
```

# etc
## codegen.yml
```bash
$ yarn graphql-codegen init
```
```yaml
overwrite: true
schema: "http://localhost:4000/graphql"
documents: "graphql/**/!(*.local).graphql"
generates:
  generated/apolloComponents.tsx:
    config:
      noNamespaces: true
    plugins:
      - "typescript"
      - "typescript-operations"
      - "typescript-react-apollo"
      - "fragment-matcher"

```

## tsconfig.json
```json
{
  "compilerOptions": {
    "allowJs": true,
    "alwaysStrict": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "lib": ["dom", "es2017"],
    "module": "esnext",
    "moduleResolution": "node",
    "noEmit": true,
    "noFallthroughCasesInSwitch": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "resolveJsonModule": true,
    "skipLibCheck": true,
    "strict": true,
    "target": "esnext"
  },
  "exclude": ["node_modules"],
  "include": ["**/*.ts", "**/*.tsx"]
}

```