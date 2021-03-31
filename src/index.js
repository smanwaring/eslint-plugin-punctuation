/**
 * @fileoverview Linting rules for using appropriate punctuation symbols (like the apostrophe symbol) in string literals.
 * @author Stephanie Manwaring
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------


// import all rules in lib/rules
module.exports.rules = requireIndex(__dirname + "/rules");



