"use strict";

const Storage = require("../carstorageClass");

describe("testing class with cars.json", () => {
  const carstorage = new Storage("./cars.json");

  test("test find with licence ABC-1", () => {
    const expectedResult = [{ model: "Bored T-model", licence: "ABC-1" }];

    return expect(carstorage.find("licence", "ABC-1")).resolves.toEqual(expectedResult);
  });
});
