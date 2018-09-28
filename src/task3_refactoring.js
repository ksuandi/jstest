"use strict";

exports.originalFunc = function originalFunc(s, a, b) {
    if (s.match(/^$/)) {
        return -1;
    }

    var i = s.length - 1;
    var aIndex = -1;
    var bIndex = -1;

    while (aIndex == -1 && bIndex == -1 && i > 0) {
        if (s.substring(i, i + 1) == a) {
            aIndex = i;
        }
        if (s.substring(i, i + 1) == b) {
            bIndex = i;
        }
        i = i - 1;
    }

    if (aIndex != -1) {
        if (bIndex == -1) {
            return aIndex;
        } else {
            return Math.max(aIndex, bIndex);
        }
    }

    if (bIndex != -1) {
        return bIndex;
    } else {
        return -1;
    }
};

exports.refactoredFunc = function refactoredFunc(str, a, b) {
    if (typeof str !== "string") {
        return -1;
    }

    var aIndex = str.lastIndexOf(a),
        bIndex = str.lastIndexOf(b);

    return Math.max(aIndex, bIndex);
};
