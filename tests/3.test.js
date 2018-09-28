const lib = require("../src/task3_refactoring.js"),
    f1 = lib.originalFunc,
    f2 = lib.refactoredFunc;

test("equal results", () => {
    let p = ["---(++++)----", "+", 1];
    expect(f1(p[0], p[1], p[2])).toBe(f2(p[0], p[1], p[2]));

    p = ["dfdsfsdggggggggg", "g", null];
    expect(f1(p[0], p[1], p[2])).toBe(f2(p[0], p[1], p[2]));

    p = ["dfdsfsdggggggggg", "a", "b"];
    expect(f1(p[0], p[1], p[2])).toBe(f2(p[0], p[1], p[2]));
});
