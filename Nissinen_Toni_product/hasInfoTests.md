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

return

```shell
true
true
true
true
false
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
