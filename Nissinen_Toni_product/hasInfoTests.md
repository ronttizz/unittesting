# Test cases for has_info(searchKey)

- Method checks based on productNumber if the product has `'info'` or not.

Before tests create `'products'` object with default data

## Test 1: get `'true'` or `'false'` searching given searchKey from testKeys array using default data

```js
const testKeys = [
  [1, true],
  [2, true],
  [3, true],
  [4, true],
  [5, false],
];
```

```js
products.has_info(1);
products.has_info(2);
products.has_info(3);
products.has_info(4);
products.has_info(5);
```

return

```shell
true
true
true
true
false
```

## Test 2: get `'false'` searching with `'null'` as a parameter

```js
products.has_info(null);
```

returns

```shell
false
```

## Test 3: get `'false'` searching without a parameter

```js
products.has_info(null);
```

returns

```shell
false
```
