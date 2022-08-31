"use strict";

const { sum, subtract, divide } = require("../calclibrary");

// #####################
// ##                 ##
// ##    SUM TESTS    ##
// ##                 ##
// #####################

describe("Test sum with integers one by one", () => {
  test("test sum(1,1) returns 2", () => {
    expect(sum(1, 1)).toBe(2);
  });

  test("test sum(2,3) returns 5", () => {
    expect(sum(2, 3)).toBe(5);
  });
});

describe("Test sum with integers using test.each", () => {
  const testValues = [
    // [a, b, result]
    [12, 100, 112],
    [2, -4, -2],
    [-4, 2, -2],
    [0, 0, 0],
    [0, 3, 3],
    [3, 0, 3],
    [0, -3, -3],
    [-3, 0, -3],
  ];

  test.each(testValues)("sum(%s,%s) returns %s", (a, b, result) => {
    expect(sum(a, b)).toBe(result);
  });
});

describe("Test sum with floats using test.each", () => {
  const testValues = [
    // [a, b, result]
    [10, 11.5, 21.5],
    [2.5, 3, 5.5],
    [-2.5, 3, 0.5],
    [3, -2.5, 0.5],
    [-2.5, -3, -5.5],
    [-2.5, -2.5, -5.0],
    [-2.5, 0, -2.5],
    [2.5, -2.5, 0],
    [2.4, -2.5, -0.1],
  ];

  test.each(testValues)("sum(%s,%s) returns %s", (a, b, result) => {
    expect(sum(a, b)).toBeCloseTo(result);
  });
});

describe("Test that missing parameters throw an exception", () => {
  test("sum() throws an exception 'parameter missing'", () => {
    expect(() => sum()).toThrow("parameter missing");
  });

  const testValues = [[1], ["a"], [""]];

  test.each(testValues)("sum(%s) throws an exception 'parameter missing'", (ex) => {
    expect(() => sum(ex)).toThrow("parameter missing");
  });
});

describe("Test that only numbers are allowed", () => {
  const testValues = [
    ["sum('1', '2')", "1", "2"],
    ["sum('a', 1)", "a", 1],
    ["sum(1, 'a')", 1, "a"],
    ["sum('a', 'b')", "a", "b"],
    ["sum('', '')", "", ""],
    ["sum(null, 1)", null, 1],
    ["sum(undefined, 1)", undefined, 1],
    ["sum(1, null)", 1, null],
    ["sum(1, undefined)", 1, undefined],
  ];

  test.each(testValues)("%s throws an exception 'only numbers allowed'", (text, a, b) => {
    expect(() => sum(a, b)).toThrow("only numbers allowed");
  });
});

// ##########################
// ##                      ##
// ##    SUBTRACT TESTS    ##
// ##                      ##
// ##########################

describe("Test subtracking with integers using test.each", () => {
  const testValues = [
    // [a, b, result]
    [2, -4, 6],
    [-4, 2, -6],
    [0, 0, 0],
    [0, 3, -3],
    [3, 0, 3],
    [0, -3, 3],
    [-3, 0, -3],
  ];

  test.each(testValues)("subtract(%s,%s) returns %s", (a, b, result) => {
    expect(subtract(a, b)).toBe(result);
  });
});

describe("test subtracking with floats using test.each", () => {
  const testValues = [
    [10, 11.5, -1.5],
    [-2.5, 3, -5.5],
    [2.5, 2.5, 0],
    [2.4, -2.5, 4.9],
  ];

  test.each(testValues)("subtract(%s, %s) returns %s", (a, b, result) => {
    expect(subtract(a, b)).toBeCloseTo(result);
  });
});

describe("Test subtracting throws an exception 'parameters missing'", () => {
  test("subtract() throws an exception 'parameter missing'", () => {
    expect(() => subtract()).toThrow("parameter missing");
  });

  const testValues = [
    ["subtract(1)", 1],
    ["subtract('a')", "a"],
    ["subtract('')", ""],
  ];

  test.each(testValues)("%s throws an exception 'parameter missing'", (text, a) => {
    expect(() => subtract(a)).toThrow("parameter missing");
  });
});

describe("Test subtracting throws an exception 'only numbers allowed'", () => {
  const testValues = [
    ["sum('1', '2')", "1", "2"],
    ["sum('a', 1)", "a", 1],
    ["sum(1, 'a')", 1, "a"],
    ["sum('a', 'b')", "a", "b"],
    ["sum('', '')", "", ""],
    ["sum(null, 1)", null, 1],
    ["sum(undefined, 1)", undefined, 1],
  ];

  test.each(testValues)("%s throws an exception 'only number allowed", (text, a, b) => {
    expect(() => subtract(a, b)).toThrow("only numbers allowed");
  });
});

// ##################
// ##              ##
// ##    DIVIDE    ##
// ##              ##
// ##################

describe("Test divde", () => {
  const testValues = [
    [0, 0, Number.NaN],
    [2, 0, Number.POSITIVE_INFINITY],
    [-2, 0, Number.NEGATIVE_INFINITY],
    [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY, Number.NaN],
  ];

  test.each(testValues)("divide(%s,%s) returns %s", (a, b, result) => {
    expect(divide(a, b)).toBe(result);
  });
});
