"use strict";

function checkBraces(str) {
    if (typeof str !== "string") {
        return 1;
    }

    var len = str.length,
        brackets = {
            "}": "{",
            ")": "(",
            "]": "[",
            ">": "<"
        },
        openingBrackets = Object.values(brackets),
        closingBrackets = Object.keys(brackets),
        stack = [],
        current,
        expected;

    for (let i = 0; i < len; i++) {
        current = str[i];

        if (openingBrackets.indexOf(current) > -1) {
            stack.push(current);
        } else if (closingBrackets.indexOf(current) > -1) {
            expected = brackets[current];
            if (stack.pop() !== expected) {
                return 1;
            }
        }
    }

    return stack.length > 0 ? 1 : 0;
}

module.exports = checkBraces;
