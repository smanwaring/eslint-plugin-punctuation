# eslint-plugin-punctuation

Linting rules for using appropriate punctuation symbols (like the apostrophe symbol) in string literals.

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
    "punctuation/rule-name": 2
  }
}
```

## Supported Rules

- Fill in provided rules here
