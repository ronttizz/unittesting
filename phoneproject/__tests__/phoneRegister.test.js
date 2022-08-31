"use strict";

const phones = require("../phones.json");
const PhoneRegister = require("../phoneRegister.js");

describe("Test constructor", () => {
  test("Test that the missing parameter throws an exception", () => {
    expect(() => new PhoneRegister()).toThrow("phone data missing");
  });

  //   test("Just for an example. Create object with default data.", () => {
  //     const register = new PhoneRegister(phones);
  //     expect(register.phoneData).toEqual(phones);
  //   });
});

describe("Testing getTypes", () => {
  test("Test 1: with default data", () => {
    const register = new PhoneRegister(phones);
    expect(register.getTypes()).toEqual(["home", "work", "mobile"]);
  });

  test("Test 2: persons has no phones", () => {
    const testData = [
      {
        firstname: "Leila",
        lastname: "Hökki",
        phones: [],
      },
      {
        firstname: "Matt",
        lastname: "River",
      },
    ];

    const register = new PhoneRegister(testData);

    expect(register.getTypes()).toEqual([]);
  });

  test("Test 3: no persons in phoneregister", () => {
    const register = new PhoneRegister([]);

    expect(register.getTypes()).toEqual([]);
  });

  test("Test 4: Type is missing or is an empty string", () => {
    const testData = [
      {
        firstname: "Leila",
        lastname: "Hökki",
        phones: [
          { type: "", number: "12345678" },
          { type: "work", number: "87654321" },
          { type: "work", number: "05040302" },
        ],
      },
      {
        firstname: "Matt",
        lastname: "River",
        phones: [
          { type: "home", number: "567890123" },
          { type: "mobile", number: "045678912" },
          { type: "work", number: "3214569" },
        ],
      },
      {
        firstname: "Mary",
        lastname: "Jones",
        phones: [
          { number: "5555555" },
          { type: "cell", number: "3333333" },
          { type: "work", number: "4444444" },
        ],
      },
    ];

    const register = new PhoneRegister(testData);

    expect(register.getTypes()).toEqual(["work", "home", "mobile", "cell"]);

    // expect(register.getTypes().sort()).toEqual(["home", "work", "mobile", "cell"].sort());
  });

  test("Test 5: Some phones are missing", () => {
    const testData = [
      {
        firstname: "Leila",
        lastname: "Hökki",
        phones: [],
      },
      {
        firstname: "Vera",
        lastname: "River",
        phones: [
          { type: "mobile", number: "12121212" },
          { type: "home", number: "4325980" },
        ],
      },
    ];

    const register = new PhoneRegister(testData);

    expect(register.getTypes()).toEqual(["mobile", "home"]);
  });
});

describe("Tests for getPersonsNumbersByType(firstname, lastname, type)", () => {
  const register = new PhoneRegister(phones);

  test("Test 1: work numbers of Leila Hökki", () => {
    expect(register.getPersonsNumbersByType("Leila", "Hökki", "work")).toEqual([
      "87654321",
      "05040302",
    ]);
  });

  test("Test 2A: mobile numbers of Matt River", () => {
    expect(register.getPersonsNumbersByType("Matt", "River", "mobile")).toEqual([
      "045678912",
    ]);
  });

  test("Test 2B: home number of Matt River", () => {
    expect(register.getPersonsNumbersByType("Matt", "River", "home")).toEqual([
      "567890123",
    ]);
  });

  describe("Test 3: wrong type or name returns an empty array", () => {
    const testValues = [
      ["Matt", "River", "x"],
      ["Matt", "x", "mobile"],
      ["x", "River", "mobile"],
    ];

    test.each(testValues)(
      "firstname = %s, lastname = %s, type = %s returns []",
      (firstname, lastname, type) => {
        expect(register.getPersonsNumbersByType(firstname, lastname, type)).toEqual([]);
      }
    );
  });

  describe("Test 4: missing parameter throws an exception `'missing parameter'`", () => {
    test("one parameter missing", () => {
      expect(() => register.getPersonsNumbersByType("Matt", "River")).toThrow(
        "missing parameter"
      );
    });

    test("two parameters missing", () => {
      expect(() => register.getPersonsNumbersByType("Matt")).toThrow("missing parameter");
    });

    test("all parameters missing", () => {
      expect(() => register.getPersonsNumbersByType()).toThrow("missing parameter");
    });
  });

  test("Test 5: if data is empty array (no persons is found)", () => {
    const emptyRegister = new PhoneRegister([]);

    expect(emptyRegister.getPersonsNumbersByType("Matt", "River", "mobile")).toEqual([]);
  });
});

describe("Test Cases for getAllNumbersByType", () => {
  const register = new PhoneRegister(phones);

  test("Test 1: get all work numbers using default data", () => {
    const expectedValue = [
      {
        firstname: "Leila",
        lastname: "Hökki",
        number: { type: "work", tel: "87654321" },
      },
      {
        firstname: "Leila",
        lastname: "Hökki",
        number: { type: "work", tel: "05040302" },
      },
      {
        firstname: "Matt",
        lastname: "River",
        number: { type: "work", tel: "3214569" },
      },
    ];

    expect(register.getAllNumbersByType("work")).toEqual(expectedValue);
  });

  test("Test 2A: get all mobile numbers using default data", () => {
    const expectedValue = [
      {
        firstname: "Leila",
        lastname: "Hökki",
        phones: [
          {
            type: "home",
            number: "12345678",
          },
        ],
      },
      {
        firstname: "Matt",
        lastname: "River",
        number: { type: "mobile", tel: "045678912" },
      },
    ];

    expect(register.getAllNumbersByType("mobile")).toEqual(expectedValue);
  });

  test("Test 2B: get all home numbers using default data", () => {
    const expectedValue = [
      {
        firstname: "Matt",
        lastname: "River",
        number: { type: "home", tel: "567890123" },
      },
    ];

    expect(register.getAllNumbersByType("home")).toEqual(expectedValue);
  });

  test("Test 3: no number of given type is found", () => {
    expect(register.getAllNumbersByType("cell")).toEqual([]);
  });

  test("Test 4: parameter is missing throws en exception `'missing parameter'`", () => {
    test(() => register.getAllNumbersByType()).toThrow("missing parameter");
  });

  test("Test 5: person has type but the corresponding number is missing", () => {
    const testData = [
      {
        firstname: "Vera",
        lastname: "Jones",
        phones: [
          { type: "home", number: "" },
          { type: "home" },
          { type: "home", number: "123123678" },
        ],
      },
    ];

    const expectedValue = [
      {
        firstname: "Vera",
        lastname: "Jones",
        phones: [{ type: "home", number: "123123678" }],
      },
    ];

    const register2 = new PhoneRegister(testData);

    expect(register2.getAllNumbersByType("home")).toEqual(expectedValue);
  });
});
