/**
 * @fileoverview Prefer use of the apostrophe symbol (instead of a single quote) in contractions or possessives in string literals.
 * @author Stephanie Manwaring 
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../src/rules/prefer-apostrophe-in-string-literal");
var RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("prefer-apostrophe-in-string-literal", rule, {
    valid: [
        {
            code: "myFunc(\'The Cat’s Pajamas\')",
        },
        {
            code: "throw new Error(\"The cat's pajamas\")"
        },
        {
            code: "it(\"The cat's pajamas\")"
        },
        {
            code: "describe(\"The cat's pajamas\")"
        }
    ],

    invalid: [
        {
            code: "myFunc(\"The Cat\'s Pajamas\")",
            errors: [{
                message: "Prefer apostrophe symbol ’ for contractions and possesesives.",
                type: "Literal"
            }]
        },
    ]
});
