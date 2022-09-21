# Test cases for get_Price(productNumber)

- get the price of the product, returns the price of a product matching the given productNumber, if no product with the given productNumber is found throws an exeption `'nothing found with given'`

Before tests create `'products'` object with default data

## Test 1: get product price by searhing with given productnumbers

```js
const testKeys = [
  [1, 300],
  [2, 300],
  [3, 15],
  [4, 36],
  [5, 15],
];
```

```js
products.get_Price(1);
products.get_Price(2);
products.get_Price(3);
products.get_Price(4);
products.get_Price(5);
```

results

```shell
300
300
15
36
15
```

## Test 2: no product is found throws exception `'nothing found with given'`

```js
products.get_Price(6);
products.get_Price(7);
products.get_Price(8);
products.get_Price();
```

returns

```shell
'nothing found with given'
'nothing found with given'
'nothing found with given'
'nothing found with given'
```
