"use strict";

// runs before everything
beforeAll(() => {
  console.log("BEFORE_ALL", "init before all tests");
});

// runs after all tests
afterAll(() => {
  console.log("AFTER_ALL", "cleaning after all tests");
});

// the tests themselves
test("This is the first test", () => {
  console.log("First test");
});

// or
it("This is the second test", () => {
  console.log("second test");
});
// use test() or it() not both, not illegal but preferable

// describe is a collection of tests/functions ran in order
describe("This is a test suite A", () => {
  // runs before each test in this suite/describe
  beforeEach(() => {
    console.log("beforeEach", "Run before each test in suite A");
  });

  // runs after each test in this suite/describe
  afterEach(() => {
    console.log("afterEach", "Run after every test in suite A");
  });

  // tests themselves
  test("First test in suite A", () => {
    console.log("first in suite A");
  });

  test("Second test in suite A", () => {
    console.log("second in suite A");
  });
});

describe("This is test suite B", () => {
  beforeAll(() => {
    console.log("BeforeAllInSuiteB");
  });

  describe("This is a subSuite A of suite B", () => {
    test("first test of subSuite A of B", () => {
      console.log("subSuite A of B");
    });

    test("second test of subSuite A of B", () => {
      console.log("second test of subSuite A of B");
    });
  });

  describe("Subsuite B of B", () => {
    test("first test of subSuite B of B", () => {
      console.log("first test of subSuite B of B");
    });
  });
});

describe("Test concatenating strings", () => {
  const concat = (partA, partB) => partA + partB;

  test("'First' and 'second' results 'firstsecond'", () => {
    expect(concat("first", "second")).toBe("firstsecond");
  });

  test("'1' and '2' results '12'", () => {
    expect(concat("1", "2")).toBe("12");
  });
});

describe("this tests for an exception", () => {
  function testFunction() {
    throw Error("This is an exception");
  }

  test("tests if a function throws an exception", () => {
    expect(() => testFunction()).toThrow("This is an exception");
  });
});
