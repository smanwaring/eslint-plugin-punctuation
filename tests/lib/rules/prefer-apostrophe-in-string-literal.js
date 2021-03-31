/**
 * @fileoverview Prefer use of the apostrophe symbol (instead of a single quote) in conjunctions or possessives in string literals.
 * @author Stephanie Manwaring 
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/prefer-apostrophe-in-string-literal"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("prefer-apostrophe-in-string-literal", rule, {

    valid: [

        // give me some code that won't trigger a warning
    ],

    invalid: [
        {
            code: "<p>The Cat's Pajamas</p>",
            errors: [{
                message: "Fill me in.",
                type: "Me too"
            }]
        }
    ]
});
