"use strict";

module.exports = class ProductStorage {
  constructor(data) {
    if (!data) throw new Error("data storage missing");
    this.productData = data;
  }

  get_total_price_of_products_by_type(type) {
    let total = 0;
    if (!type) throw new Error("missing parameter");
    for (let product of this.productData) {
      if (product.type === type) {
        total += product.price;
      }
    }
    if (total === 0) {
      throw new Error("'nothing found with given'");
    }
    return total;
  }

  has_info(id) {
    for (let product of this.productData) {
      if (
        product.productNumber === id &&
        product.info &&
        Object.entries(product.info).length !== 0
      ) {
        return true;
      }
    }
    return false;
  }

  get_all_products_by_type(type) {
    const found = [];
    if (!type) throw new Error("missing parameter");
    for (let product of this.productData) {
      if (product.type === type) {
        found.push(product);
      }
    }
    return found;
  }

  get_product_colors(id) {
    const colors = [];
    for (let product of this.productData) {
      if (product.productNumber === id) {
        if (product.colors) {
          product.colors.forEach((color) => {
            if (colors.contains !== color) {
              colors.push(color);
            }
          });
        }
      }
    }
    return colors;
  }

  get_Price(id) {
    for (let product of this.productData) {
      if (product.productNumber === id) {
        return product.price;
      }
    }
    throw new Error("nothing found with given");
  }
};
