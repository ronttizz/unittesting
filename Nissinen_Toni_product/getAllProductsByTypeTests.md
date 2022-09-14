# Test cases for get_all_products_by_type(searchValue)

- searches products with given type returns an array of given type, returns an array of product objects of given type. If no product of given type is found, returns an empty array. If a parameter searchValue is missing, an exeption 'missing parameter' is thrown

Before create `'products'` object with default data

## Test 1: get all products searching `'toaster'`

```js
producst.get_all_products_by_type("toaster");
```

returns

```json
[
  {
    "productNumber": 1,
    "name": "Tako delux",
    "type": "toaster",
    "price": 300,
    "manufacturer": "Penquin appliances",
    "colors": ["black", "blue", "green"],
    "info": {
      "energyclass": "A+",
      "model": "gold",
      "comments": "no comments"
    }
  },
  {
    "productNumber": 5,
    "name": "Tako delux",
    "type": "toaster",
    "price": 15,
    "manufacturer": "Ocean",
    "colors": ["blue", "black", "yellow"]
  }
]
```

## Test 2: get all products searching `'phone'`

```js
producst.get_all_products_by_type("phone");
```

returns

```json
[
  {
    "productNumber": 3,
    "name": "MaxEffect 2000",
    "type": "phone",
    "price": 15,
    "manufacturer": "Leila Hökki & co",
    "colors": ["red", "green", "yellow"],
    "info": {
      "energyclass": "B",
      "model": "gold",
      "comments": "no comments"
    }
  }
]
```

## Test 3: get all products searching `'computer'`

```js
producst.get_all_products_by_type("computer");
```

returns

```json
[]
```

## Test 4: searching with no parameter throws an exception `'missing parameter'`

```js
producst.get_all_products_by_type();
```

returns

```shell
missing parameter
```
