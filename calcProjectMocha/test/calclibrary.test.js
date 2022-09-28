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
