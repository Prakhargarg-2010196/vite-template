


# Project Configurations

Commands of good usage

To run typescript build use `ctrl + shift + B` and then tsc:build option this will use the typeconfig.json

Configured eslint using eslintrc.cjs with following configs and plugins

## PLUGINS

### **React associated**

- React and React hooks support (recommended)
  [npm for react](https://github.com/prettier/eslint-plugin-prettier)
  [github for react](https://github.com/jsx-eslint/eslint-plugin-react)
  [npm for react hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)

```javascript 
  //Add the following line to extends rule in .eslintrc
  {
    "extends": [ "plugin:react/recommended",
                 "plugin:react-hooks/recommended",
                 ""
               ]
  }
  // Also put the following in settings
  {
       settings:{
            "react": {
                "version": "detect"
            },
       }
  }

```

- React JSX Runtime : For enabling JSX support without importing react (See this :[JSX Transform React 17+](https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html))

  ```javascript
  //Add the following line to extends rule in .eslintrc
  {
    "extends": [" 'plugin:react/jsx-runtime'"]
  }
  ```

- React JSX Accessiblity ([npm](https://www.npmjs.com/package/eslint-plugin-jsx-a11y))

```javascript
//Add the following line to extends rule in .eslintrc
{
  "extends": [" 'plugin:jsx-a11y/recommended'"]
}
```

- React-refresh ([npm](https://www.npmjs.com/package/react-refresh)):

  This is configured automatically by react template with typescript in vite
  But if you want to configure it then include the following

  ```javascript
  "plugins": ["react-refresh"],
  rules: {
      'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
      ],
  }
  ```

### Misc

- For imports
  [npm](https://www.npmjs.com/package/eslint-plugin-import)
  [github](https://github.com/import-js/eslint-plugin-import)

  ```javascript
  {
    "extends": ["plugin:import/recommended"]
  }
  ```

- For imports resolving with typescript
  [npm](https://www.npmjs.com/package/eslint-import-resolver-typescript)
  [github](https://github.com/import-js/eslint-import-resolver-typescript)

  ```javascript
  {
    "extends": ["plugin:import/typescript"],
    "settings": {
      "import/resolver": {
        "typescript": {}
      }
    }
  }
  ```

### Configs

- Typescript support using typescript-eslint
  [npm](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin)
  [github](https://github.com/typescript-eslint/typescript-eslint)

- For Prettier
  [npm](https://www.npmjs.com/package/eslint-plugin-prettier)
  [github](https://github.com/prettier/eslint-plugin-prettier)

  ```javascript
  {
    "extends": ["prettier"]
  }
  ```

### For Setting Up Airbnb in this project

1. Setup AIRBNB CONFIG FOR ESLINT

   - [npm](https://www.npmjs.com/package/eslint-config-airbnb)

   ```javascript
   //Add the following line to extends rule in .eslintrc
   {
     "extends": ["airbnb"]
   }
   ```

2. Setup Airbnb config for typescript with peerDeps(peer dependencies)
   [npm](https://www.npmjs.com/package/eslint-config-airbnb)

   ```shell
       npm info "eslint-config-airbnb@latest" peerDependencies

   ```

   ```javascript
   //Add the following line to extends rule in .eslintrc
   {
       extends:["airbnb","airbnb-typescript"]
   }
   // for hooks implementations
   {
       extends:["airbnb","airbnb-hooks","airbnb-typescript"]
   }
   ```

3.
