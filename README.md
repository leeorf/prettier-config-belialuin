# prettier-config-belialuin

> Shareable `prettier` config to use across multiple projects.

## Installation

```sh
yarn add -D prettier prettier-config-belialuin
```

## Getting started

### Config in `package.json`:

You can reference it in your `package.json`:

```json
{
  "name": "my-cool-library",
  "version": "9000.0.1",
  "prettier": "prettier-config-belialuin"
}
```

### With a dedicated `prettier` config:

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

## Usage

> **_NOTE:_**: This is just a recommendation. At least is how I use it nowadays.

In your `package.json` create 2 scripts:

1. Format your files;
2. Check if prettier has been ran across your files (can be useful in ci pipelines).

```json
{
  "scripts": {
    "format": "prettier --write .",
    "format:check": "prettier --check ."
  }
}
```

You can even enhance your workflow and combine with [husky](https://typicode.github.io/husky) and [lint-staged](https://github.com/okonet/lint-staged) as a `pre-commit` hook.

To format files before they are commited you can use Husky's `pre-commit` hook along with lint-staged:

1. Install husky and lint-staged

```sh
yarn add -D husky lint-staged
```

2. Enable Git hooks

```sh
yarn husky install
```

### Add hook

```sh
npx husky add .husky/pre-commit "yarn lint-staged"
```
To automatically have Git hooks enabled after install, edit `package.json`

```json
{
  "scripts": {
    "prepare": "husky install"
  }
}
```

Now in your package json, define file patterns of your `lint-staged` command:

```json
{
  "lint-staged": {
    "*": [
      "prettier --write --ignore-unknown"
    ]
  },
}
```


