"use strict";

const datastorage = require("../datastorage.json");
const ProductStorage = require("../productStorage.js");

describe("Test for constuctor", () => {
  test("Test that missing parameter throws an exception 'data storage missing'", () => {
    expect(() => new ProductStorage()).toThrow("data storage missing");
  });
});
