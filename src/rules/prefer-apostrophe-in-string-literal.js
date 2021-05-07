/**
 * @fileoverview Prefer use of the apostrophe symbol (instead of a single quote) in contractions or possessives in string literals.
 * @author Stephanie Manwaring 
 */

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------
module.exports = {
  meta: {
      docs: {
          description: "Prefer use of the apostrophe symbol (instead of a single quote) in contractions or possessives in string literals.",
          category: "Stylistic Issues",
          recommended: false
      },
      fixable: null,  // or "code" or "whitespace"
      schema: [
          // fill in your schema
      ]
  },
  create: function(context) {
      const ERROR_MESSAGE_PERFER_APOSTROPHE = "Prefer apostrophe symbol ’ for contractions and possesesives.";
      // checks for the following pattens: a'b, abc'd, or abc'def ('b and b' are not matched)
      const IS_SINGLE_QUOTE_SURROUNEDED_BY_LETTERS_REGEX = /[A-Za-z](?=('(?=([A-Za-z]))))/g;

      return {
        Literal(node) {
          // this rule doesn't care about string literals used in "Throw" statements
          if (node.parent.parent && node.parent.parent.type === "ThrowStatement") {
            return null;
          }
          // this rule doesn't care about string literals used in 'it' or 'describe' blocks (used in tests)
          if (node.parent && node.parent.type === "CallExpression" && (node.parent.callee.name === "it" || node.parent.callee.name === "describe")) {
            return null;
          }
          if (node.value && RegExp(IS_SINGLE_QUOTE_SURROUNEDED_BY_LETTERS_REGEX).test(node.value)) {
            context.report({
              node,
              loc: node.loc,
              message: ERROR_MESSAGE_PERFER_APOSTROPHE,
            });
          }
        }
    };
  }
};