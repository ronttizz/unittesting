# Test cases for get_total_price_of_products_by_type(searchValue)

- returns the total price of all products that have the same type than the given searchValue. if no product with the given searchValue is found throws an exeption 'nothing found with given'. If a parameter searchValue is missing, an exeption 'missing parameter' is thrown

Before tests create `'products'` object with default data

## Test 1: get total cumulative price of toasters using default data

```js
products.get_total_price_of_products_by_type("toaster");
```

return

```shell
315
```

## Test 2: get total cumulative price of phones using default data

```js
products.get_total_price_of_products_by_type("toaster");
```

return

```shell
15
```

## Test 3: throw `'nothing found with given'` using default data

```js
products.get_total_price_of_products_by_type("computer");
```

return

```shell
'nothing found with given'
```

## Test 4: throw `'missing parameter'`

```js
products.get_total_price_of_products_by_type();
```

return

```shell
'missing parameter'
```
