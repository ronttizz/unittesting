"use strict";

const Dice = require("../dice.js");

describe("Test that methods are defined", () => {
  const dice = new Dice();

  test("roll is defined", () => {
    expect(dice.roll).toBeDefined();
  });

  //   always defined in class
  //   test("toString is defined", () => {
  //     expect(dice.toString).toBeDefined();
  //   });
});

describe("Constructor tests", () => {
  describe("Create dice with no upper bound given", () => {
    const dice = new Dice();

    test("minimumValue is 1", () => {
      expect(dice.minimumValue).toBe(1);
    });

    test("maximumValue is 6", () => {
      expect(dice.maximumValue).toBe(6);
    });

    test("dots is 0", () => {
      expect(dice.dots).toBe(0);
    });
  });

  describe("Create dice with upper bound 2-20", () => {
    const testValues = new Array(19).fill(2).map((values, i) => [values + i]);

    test.each(testValues)("test upper bound %s", (upperBound) => {
      const dice = new Dice(upperBound);
      expect(dice.minimumValue).toBe(1);
      expect(dice.maximumValue).toBe(upperBound);
      expect(dice.dots).toBe(0);
    });
  });

  describe("Test exceptions", () => {
    const testValues = [
      [0, "upper bound too small"],
      [1, "upper bound too small"],
      [-1, "upper bound too small"],
      [21, "upper bound too big"],
      ["a", "upper bound must be an integer"],
      [2.5, "upper bound must be an integer"],
    ];

    test.each(testValues)("Upper bound %s throws exception %s", (ubound, text) => {
      expect(() => new Dice(ubound)).toThrow(text);
    });
  });
});

describe("Testing toString() method", () => {
  let dice;

  beforeEach(() => {
    dice = new Dice();
  });

  //   test("dice rolled", () => {
  //     dice.roll();
  //     expect(dice.toString()).toBe(`${dice.dots}`);
  //   });

  test("dice not rolled yet", () => {
    expect(dice.toString()).toBe("Not rolled yet");
  });
});

describe("Testing roll", () => {
  describe("Default upper bound 6", () => {
    const dice = new Dice();

    test("test when the dice is rolled", () => {
      dice.roll();
      expect(dice.dots).toBeGreaterThanOrEqual(1);
      expect(dice.dots).toBeLessThanOrEqual(6);
    });
  });

  describe("Create a dice with given upper bound 2-20 and roll it", () => {
    const testCases = new Array(19).fill(2).map((value, i) => [value + i]);

    test.each(testCases)("test upper bound %s", (ubound) => {
      const dice = new Dice(ubound);
      dice.roll();
      expect(dice.dots).toBeGreaterThanOrEqual(1);
      expect(dice.dots).toBeLessThanOrEqual(ubound);
    });

    test.each(testCases)("test upper bound stats %s", (ubound) => {
      const dice = new Dice(ubound);
      for (let i = 0; i < 100; i++) {
        dice.roll();
        expect(dice.dots).toBeGreaterThanOrEqual(1);
        expect(dice.dots).toBeLessThanOrEqual(ubound);
      }
    });
  });
});
