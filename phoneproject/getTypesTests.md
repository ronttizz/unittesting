# Test Cases for getTypes()

## Test 1: with default data

Before tests create `register` object from the class PhoneRegister

- getTypes() return

```js
register.getTypes();
```

```json
["home", "work", "mobile"]
```

## Test 2: persons has no phones

**testData**

```json
[
  {
    "firstname": "Leila",
    "lastname": "Hökki",
    "phones": []
  },
  {
    "firstname": "Matt",
    "lastname": "River"
  }
]
```

```js
const register = new PhoneRegister(testData);
register.getTypes();
```

expect this to return an empty array []

## Test 3: no persons in phoneregister

testData is []

returns an empty array []

## Test 4: Type is missing or is an empty string

**testData**

```json
[
  {
    "firstname": "Leila",
    "lastname": "Hökki",
    "phones": [
      { "type": "", "number": "12345678" },
      { "type": "work", "number": "87654321" },
      { "type": "work", "number": "05040302" }
    ]
  },
  {
    "firstname": "Matt",
    "lastname": "River",
    "phones": [
      { "type": "home", "number": "567890123" },
      { "type": "mobile", "number": "045678912" },
      { "type": "work", "number": "3214569" }
    ]
  },
  {
    "firstname": "Mary",
    "lastname": "Jones",
    "phones": [
      { "number": "5555555" },
      { "type": "cell", "number": "3333333" },
      { "type": "work", "number": "4444444" }
    ]
  }
]
```

create new register with testData

```js
const register = new PhoneRegister(testData);
register.getTypes();
```

expect to get

```json
["work", "home", "mobile", "cell"]
```

## Test 5: Some phones are missing

```json
[
  {
    "firstname": "Leila",
    "lastname": "Hökki",
    "phones": []
  },
  {
    "firstname": "Vera",
    "lastname": "River",
    "phones": [
      { "type": "mobile", "number": "12121212" },
      { "type": "home", "number": "4325980" }
    ]
  }
]
```

```js
const register = new PhoneRegister(testData);
register.getTypes();
```

expect to get

```json
["home", "mobile"]
```
