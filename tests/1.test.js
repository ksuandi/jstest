const checkBraces = require("../src/task1_checkBraces.js");

test("checkBraces", () => {
    expect(checkBraces("---(++++)----")).toBe(0);
    expect(checkBraces("")).toBe(0);
    expect(checkBraces("before ( middle []) after ")).toBe(0);
    expect(checkBraces(") (")).toBe(1);
    expect(checkBraces("} {")).toBe(1);
    expect(checkBraces("<(   >)")).toBe(1);
    expect(checkBraces("(  [  <>  ()  ]  <>  )")).toBe(0);
    expect(checkBraces("   (      [)")).toBe(1);
});
