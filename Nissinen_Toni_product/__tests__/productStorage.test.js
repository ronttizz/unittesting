"use strict";

const datastorage = require("../datastorage.json");
const ProductStorage = require("../productStorage.js");

describe("Test for constuctor", () => {
  test("Test that missing parameter throws an exception 'data storage missing'", () => {
    expect(() => new ProductStorage()).toThrow("data storage missing");
  });
});

describe("Tests for get_total_price_of_products_by_type", () => {
  const products = new ProductStorage(datastorage);

  test("Test 1: get total cumulative price of toasters using default data", () => {
    expect(products.get_total_price_of_products_by_type("toaster")).toEqual(315);
  });

  test("Test 2: get total cumulative price of phones using default data", () => {
    expect(products.get_total_price_of_products_by_type("phone")).toEqual(15);
  });

  test("Test 3: throw en exception `'nothing found with given'` using default data", () => {
    expect(() => products.get_total_price_of_products_by_type("computer")).toThrow(
      "nothing found with given"
    );
  });

  test("Test 4: throw an exception `'missing parameter'`", () => {
    expect(() => products.get_total_price_of_products_by_type()).toThrow(
      "missing parameter"
    );
  });
});

describe("Test cases for has_info", () => {
  const products = new ProductStorage(datastorage);

  describe("Test 1: get `'true'` or `'false'` searching given searchKey from testKeys array using default data", () => {
    const testKeys = [
      [1, true],
      [2, true],
      [3, true],
      [4, true],
      [5, false],
    ];
    test.each(testKeys)("has_info(%s) returns %s", (productId, expected) => {
      expect(products.has_info(productId)).toEqual(expected);
    });
  });

  test("Test 2: get `'false'` searching with `'null'` as a parameter", () => {
    expect(products.has_info(null)).toEqual(false);
  });

  test("Test 3: get `'false'` searching without a parameter", () => {
    expect(products.has_info()).toEqual(false);
  });
});
