# Test cases for getPersonsNumbersByType(firstname, lastname, type)

Before tests create `'register'` object with the default data

## Test 1: work numbers of Leila Hökki

```js
register.getPersonsNumbersByType("Leila", "Hökki", "work");
```

returns

```json
["05040302", "87654321"]
```

## Test 2A: mobile numbers of Matt River

```js
register.getPersonsNumbersByType("Matt", "River", "mobile");
```

returns

```json
["045678912"]
```

## Test 2B: home number of Matt River

```js
register.getPersonsNumbersByType("Matt", "River", "home");
```

returns

```json
["567890123"]
```

## Test 3: wrong type or name returns an empty array

```js
register.getPersonsNumbersByType("Matt", "River", "x");
register.getPersonsNumbersByType("Matt", "x", "mobile");
register.getPersonsNumbersByType("x", "River", "mobile");
```

returns

```json
[]
```

## Test 4: missing parameter throws an exception `'missing parameter'`

```js
register.getPersonsNumbersByType("Matt", "River");
register.getPersonsNumbersByType("Matt");
register.getPersonsNumbersByType();
```

## Test 5: if data is empty array (no persons is found)

```js
const register = new PhoneRegister([]);
register.getPersonsNumbersByType("Matt", "River", "mobile");
```

returns []
