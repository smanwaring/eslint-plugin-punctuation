# Prefer use of the apostrophe symbol (instead of a single quote) in conjunctions or possessives in string literals. (prefer-apostrophe-in-string-literal)

A little background:
Although they look similar, the apostrophe is not the same thing as the single quotation mark. They are two different punctuation symbols. Single quotes should really be used for one thing: to indicate a quotation within a quotation, wheras aposrophes should be used in conjunctions or possesives.

## Rule Details

This rule aims to determine whether a single quote is being used string literal (which typically\* get rendered to a user) where an apostrophe should be used.

Examples of **incorrect** code for this rule:

```jsx
// these will warn/error
const myText = "We'll go to the movies";

<p>The cat's pajamas</p>;

myFunc("The cat's pajamas");
```

Examples of **correct** code for this rule:

```js
// fill me in
const myText = "We’ll go to the movies";

<p>The cat’s pajamas</p>;

myFunc("The cat’s pajamas");

// will not error/warn in describe or test blocks
describe("The cat's pajamas");
test("The cat's pajamas");

// will not error/warn when within a thrown Error
throw new Error("The cat's pajamas");
```

### Options

"error" and "warn"

## When Not To Use It

If you do not need to differentiate between single quotes (') and apostrophes (’) in conjunctions or possesives then you do not need this rule.
