"use strict";

module.exports = class ProductStorage {
  constructor(data) {
    if (!data) throw new Error("data storage missing");
    this.productData = data;
  }
};
