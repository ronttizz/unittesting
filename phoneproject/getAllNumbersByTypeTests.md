# Test Cases for getAllNumbersByType

Before tests create `'register'` object with the default data

## Test 1: get all work numbers using default data

```js
register.getAllNumbersByType("work");
```

returns

```json
[
  {
    "firstname": "Leila",
    "lastname": "Hökki",
    "number": { "type": "work", "tel": "87654321" }
  },
  {
    "firstname": "Leila",
    "lastname": "Hökki",
    "number": { "type": "work", "tel": "05040302" }
  },
  {
    "firstname": "Matt",
    "lastname": "River",
    "number": { "type": "work", "tel": "3214569" }
  }
]
```

## Test 2A: get all mobile numbers using default data

```js
register.getAllNumbersByType("mobile");
```

returns

```json
[
  {
    "firstname": "Matt",
    "lastname": "River",
    "number": { "type": "mobile", "tel": "045678912" }
  }
]
```

## Test 2B: get all home numbers using default data

```js
register.getAllNumbersByType("home");
```

returns

```json
[
  {
    "firstname": "Matt",
    "lastname": "River",
    "number": { "type": "home", "tel": "567890123" }
  }
]
```

## Test 3: no number of given type is found

```js
register.getAllNumbersByType("cell");
```

returns []

## Test 4: parameter is missing throws en exception `'missing parameter'`

```js
register.getAllNumbersByType();
```

returns `'missing parameter'`

## Test 5: person has type but the corresponding number is missing

testData:

```json
[
  {
    "firstname": "Vera",
    "lastname": "Jones",
    "phones": [
      { "type": "home", "number": "" },
      { "type": "home" },
      { "type": "home", "number": "123123678" }
    ]
  }
]
```

```js
register.getAllNumbersByType("home");
```

expect to return

```json
[
  {
    "firstname": "Vera",
    "lastname": "Jones",
    "phones": [{ "type": "home", "number": "123123678" }]
  }
]
```
