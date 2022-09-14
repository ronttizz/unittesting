# Test cases for has_info(searchKey)

- Method checks based on productNumber if the product has `'info'` or not.

Before create `'products'` object with default data

## Test 1: get `'true'` or `'true'` searching given searchKey from testKeys array using default data

```js
const testKeys = [
  [1, true],
  [2, true],
  [3, true],
  [4, true],
  [5, false],
  ["", false],
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
