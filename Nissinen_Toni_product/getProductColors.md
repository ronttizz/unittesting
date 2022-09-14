# Test cases for get_product_colors(searchKey)

- Returns an array of product colors. If none found, returns an empty array. searchKey is the productNumber of the product

## Test 1: get array of colors searching with testKeys using default data

Before test create `'products'` object with default data

```js
const testKeys = [
  [1, ["black", "blue", "green"]],
  [2, ["green", "white", "orange"]],
  [3, ["red", "green", "yellow"]],
  [4, ["green", "orange", "white"]],
  [5, ["blue", "black", "yellow"]],
];
```

```js
products.get_product_colors(1);
products.get_product_colors(2);
products.get_product_colors(3);
products.get_product_colors(4);
products.get_product_colors(5);
```

returns

```json
["black", "blue", "green"],
["green", "white", "orange"],
["red", "green", "yellow"],
["green", "orange", "white"],
["blue", "black", "yellow"],
```

## Test 2: get empty array searching testKeys using testData

Before test create `'products'` object with testData

```js
const testData = [
  {
    productNumber: 1,
    name: "Tako delux",
    type: "toaster",
    price: 300,
    manufacturer: "Penquin appliances",
    colors: [],
    info: {
      energyclass: "A+",
      model: "gold",
      comments: "no comments",
    },
  },
  {
    productNumber: 2,
    name: "Future 2025",
    type: "moccamaster",
    price: 300,
    manufacturer: "Leila Hökki & co",
    info: {
      energyclass: "E",
      model: "chrome",
      comments: "-",
    },
  },
];
```

```js
const products = new ProductStorage(testData);
```

```js
const testKeys = [[1][2][3]];
```

```js
products.get_product_colors(1);
products.get_product_colors(2);
products.get_product_colors(3);
```

returns []
