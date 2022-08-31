# Test cases for getName

## **getName(number)**

The method searches for the given phone `number`. If the number is found, returns JSON objectof form :

```json
{ "firstname": "", "lastname": "" }
```

If no phone matches the given `number` then `null` is returned.

If the parameter is missing `null`is also returned.

For example get the owner of "045678912"

```js
register.getNumber("045678912");
```

returns

```json
{ "firstname": "Matt", "lastname": "River" }
```

Before tests create `'register'` object with the default data

### Test 1: get Matt River by number

```js
register.getName("045678912");
```

returns

```json
{ "firstname": "Matt", "lastname": "River" }
```

### Test 1B: get name of the number

```js
const testValues = [
  ["12345678", { firstname: "Leila", lastname: "Hökki" }],
  ["87654321", { firstname: "Leila", lastname: "Hökki" }],
  ["567890123", { firstname: "Matt", lastname: "River" }],
  ["045678912", { firstname: "Matt", lastname: "River" }],
];
```

### Test 2: no matches for number

```js
register.getName("123");
```

results `'null'`

```js
register.getName("045");
```

results `'null'`

### Test 3: parameter is missing

```js
register.getNumber();
```

results `'null'`
