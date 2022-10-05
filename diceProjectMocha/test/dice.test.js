"use strict";

const expect = require("chai").expect;

// TWO POSSIBLE WAYS TO REQUIRE CHAI EXPECT
// const chai = require("chai");
// const expect = chai.expect;

const Dice = require("../dice");

describe("methods defined", function () {
  const dice = new Dice();

  it("getter maximumValue defined", function () {
    expect(dice).to.have.a.property("maximumValue");
  });

  it("method roll defined", function () {
    expect(dice).to.have.a.property("roll");
  });

  it("toString is defined", function () {
    expect(dice).to.have.a.property("toString");
  });
});

describe("Create dice with no upper bound given", function () {
  const dice = new Dice();

  it("maximum dot count is 6", function () {
    expect(dice.maximumValue).to.equal(6);
  });

  it("minimum dot count is 1", function () {
    expect(dice.minimumValue).to.equal(1);
  });

  it("dots is 0", function () {
    expect(dice.dots).to.equal(0);
  });
});

describe("create dice with upper bounds 2-20", function () {
  const testCases = new Array(19).fill(2).map((value, ind) => value + ind);

  testCases.forEach(function (uBound) {
    it(`upper bound is ${uBound}`, function () {
      const dice = new Dice(uBound);
      expect(dice.maximumValue).to.equal(uBound);
    });
  });
});

describe("create dice with upper bounds 2-20 version 2", function () {
  for (let uBound = 2; uBound < 21; uBound++) {
    const dice = new Dice(uBound);
    it(`upper bound is ${uBound}`, function () {
      expect(dice.maximumValue).to.equal(uBound);
    });
  }
});

describe("create dice with upper bounds 2-20 version 3", function () {
  // WITH THIS KIND OF TEST testUpperBound(uBound) FUNCTION MIGHT ALSO NEED OWN TESTS
  function testUpperBound(uBound) {
    const dice = new Dice(uBound);
    it(`upper bound is ${uBound}`, function () {
      expect(dice.maximumValue).to.equal(uBound);
    });
  }

  for (let uBound = 2; uBound < 21; uBound++) {
    testUpperBound(uBound);
  }
});

describe("Test exceptions", function () {
  const testCases = [
    { ubound: -1, result: "upper bound too small" },
    { ubound: 21, result: "upper bound too big" },
    { ubound: "a", result: "upper bound must be an integer" },
  ];
  testCases.forEach(function (testCase) {
    it(`Upper Bound ${testCase.ubound} throws "${testCase.result}"`, function () {
      expect(function () {
        new Dice(testCase.ubound);
      }).to.throw(testCase.result);
    });
  });
});
