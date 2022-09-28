"use strict";

const expect = require("chai").expect;

const calculate = require("../calclibrary");

describe("Test if functions are defined", function () {
  it("sum is a function", function () {
    expect(calculate.sum).to.be.a("function");
  });
});

it("sum(1,1)=2", function () {
  expect(calculate.sum(1, 1)).to.equal(2);
});

describe("test sum with integer testcases", function () {
  const testcases = [
    { a: 1, b: 1, expected: 2 },
    { a: 2, b: 3, expected: 5 },
    { a: -2, b: -4, expected: -6 },
    { expected: 0, a: 0, b: 0 }, // this is bad practice! Harder to read/understand
  ];

  testcases.forEach(function (testCase) {
    it(`sum(${testCase.a}, ${testCase.b}) = ${testCase.expected}`, function () {
      expect(calculate.sum(testCase.a, testCase.b)).to.equal(testCase.expected);
    });
  });
});

describe("test sum with integer testcases v2", function () {
  const testcases = [
    [1, 1, 2],
    [2, 3, 5],
    [-2, -4, -6],
    [0, 0, 0], // this is bad practice! Harder to read/understand
  ];

  testcases.forEach(function (testCase) {
    it(`sum(${testCase[0]}, ${testCase[1]}) = ${testCase[2]}`, function () {
      expect(calculate.sum(testCase[0], testCase[1])).to.equal(testCase[2]);
    });
  });
});

describe("test sum with floats", function () {
  const testCases = [
    { a: 10, b: 11.5, expected: 21.5 },
    { a: 2.5, b: 3, expected: 5.5 },
    { a: -2.5, b: 3, expected: 0.5 },
    { a: 2.4, b: -2.5, expected: -0.1 },
  ];

  testCases.forEach(function (tc) {
    // tc is testcase
    it(`sum(${tc.a}, ${tc.b}) = ${tc.expected}`, function () {
      expect(calculate.sum(tc.a, tc.b)).to.be.closeTo(tc.expected, 0.01);
      // expect(calculate.sum(tc.a, tc.b)).to.equal(tc.expected, 0.01); // can not do it to.equal because JS quarks
    });
  });
});

describe("Missing parameters", function () {
  it("sum(1) throws and exception 'parameter missing'", function () {
    expect(function () {
      calculate.sum(1);
    }).to.throw("parameter missing");
  });
});

describe("testing only numbers allowed", function () {
  it('sum("1","2") throws an exception', function () {
    expect(function () {
      calculate.sum("1", "2");
    }).to.throw("only numbers allowed");
  });
});

describe("test subtract with integer testcases", function () {
  const testcases = [
    { a: 1, b: 1, expected: 0 },
    { a: 2, b: 3, expected: -1 },
    { a: -2, b: -4, expected: 2 },
    { expected: 0, a: 0, b: 0 }, // this is bad practice! Harder to read/understand
  ];

  testcases.forEach(function (testCase) {
    it(`subtract(${testCase.a}, ${testCase.b}) = ${testCase.expected}`, function () {
      expect(calculate.subtract(testCase.a, testCase.b)).to.equal(testCase.expected);
    });
  });
});

describe("test subtract with floats", function () {
  const testCases = [
    { a: 10, b: 11.5, expected: -1.5 },
    { a: 2.5, b: 3, expected: -0.5 },
    { a: -2.5, b: 3, expected: -5.5 },
    { a: 2.4, b: -2.5, expected: 4.9 },
  ];

  testCases.forEach(function (tc) {
    // tc is testcase
    it(`subtract(${tc.a}, ${tc.b}) = ${tc.expected}`, function () {
      expect(calculate.subtract(tc.a, tc.b)).to.be.closeTo(tc.expected, 0.01);
    });
  });
});
