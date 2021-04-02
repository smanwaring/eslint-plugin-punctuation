# eslint-plugin-punctuation

Linting rules for using appropriate punctuation symbols (like the apostrophe symbol instead of a single quote) in string literals.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-punctuation`:

```
$ npm install eslint-plugin-punctuation --save-dev
```

## Usage

Add `punctuation` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["punctuation"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "punctuation/prefer-apostrophe-in-string-literal": "error"
  }
}
```

## Supported Rules

- prefer-apostrophe-in-string-literal
