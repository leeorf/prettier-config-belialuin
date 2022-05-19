

# prettier-config-belialuin

> Shared prettier config to use across multiple projects

## Getting started

First you need [prettier](https://github.com/prettier/prettier) installed in your project. Check the [Install Prettier](https://prettier.io/docs/en/install.html) guide.

After installing prettier, to install `prettier-config-belialuin` in your project, you will need to run the
following command using [Yarn](https://yarnpkg.com/en/):

```bash
yarn add -D prettier-config-belialuin
```

If you prefer [npm](https://www.npmjs.com/), use the following command
instead:


```bash
npm install --save-dev prettier-config-belialuin
```

## Usage

You can reference it in your `package.json`:
```json
{
  "name": "my-cool-library",
  "version": "9000.0.1",
  "prettier": "prettier-config-belialuin"
}
```

If you don’t want to use `package.json`, you can use any of the supported extensions to export a string:

`.prettierrc.json` or `.prettierrc`
```json
"prettier-config-belialuin"
```

If you want to extend the configuration and overwrite some properties from the shared configuration, import the file in a `.prettierrc.js` and export the modifications, e.g:
```js
module.exports = {
  ...require("prettier-config-belialuins"),
  semi: false,
};
```

## 📝 License

Licensed under the [MIT](/LICENSE).