# Carstorage API

## cars.json

```json
[
  { "model": "Bored T-model", "licence": "ABC-1" },
  { "model": "Nova", "licence": "XYZ-123" },
  { "model": "Bored T-model", "licence": "GTF-10" },
  { "model": "GTX", "licence": "B-1" }
]
```

### **search(key,value)**

Function returns an array of cars that matches the given criterion. If no match, returns an empty array.

If the parameters are missing, returns all carsin an array.

#### Parameters:

- key: model or licence
- value: value to be searched

### Examples:

```js
search("model", "nova");
```

returns

```json
[{ "model": "Nova", "licence": "XYZ-123" }]
```

```js
search("model", "Bored T-model");
```

returns

```json
[
  { "model": "Bored T-model", "licence": "ABC-1" },
  { "model": "Bored T-model", "licence": "GTF-10" }
]
```

```js
search("licence", "ABC-1");
```

returns

```json
[{ "model": "Bored T-model", "licence": "ABC-1" }]
```

```js
search("model", "x");
```

returns []

```js
search();

// or

search("model");

// or

search("licence");
```

returns

```json
[
  { "model": "Bored T-model", "licence": "ABC-1" },
  { "model": "Nova", "licence": "XYZ-123" },
  { "model": "Bored T-model", "licence": "GTF-10" },
  { "model": "GTX", "licence": "B-1" }
]
```
