# prettier-config-belialuin

> Shareable `prettier` config to use across multiple projects.

## Installation

```sh
yarn add -D prettier prettier-config-belialuin
```

## Usage

### With package.json

You can reference it in your `package.json`:

```json
{
  "name": "my-cool-library",
  "version": "9000.0.1",
  "prettier": "prettier-config-belialuin"
}
```

### With a dedicated commitlint config

If you don’t want to use `package.json`, you can use any of the supported
extensions to export a string:

`.prettierrc.json` or `.prettierrc`

```json
"prettier-config-belialuin"
```

If you want to extend the configuration and overwrite some properties from the
shared configuration, import the file in a `.prettierrc.js` and export the
modifications, e.g:

```js
module.exports = {
  ...require('prettier-config-belialuin'),
  semi: false,
};
```
