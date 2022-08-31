# Test cases for getAllNumbers

## **getAllNumbers()**

Returns all phone numbers in an array, each as an object form:

```json
{
  "firstname": "",
  "lastname": "",
  "phones": []
}
```

The phone object in phones array is of form:

```json
{ "type": "", "number": "" }
```

If a person doesn't have a phone (the phone field is missing or is an empty array), the person is not added into the result array

If all phones are missing, an empty array is returned
If all persons are missing, an empty array is returned

### Test 1: All persons are missing

```js
const register = new PhoneRegister([]);

register.getAllNumbers();
```

returns []

### Test 2: get all numbers from default data

Before test create `'register'` object with the default data

```js
register.getAllNumbers();
```

returns

```json
[
  {
    "firstname": "Leila",
    "lastname": "Hökki",
    "phones": [
      {
        "type": "home",
        "number": "12345678"
      },
      {
        "type": "work",
        "number": "87654321"
      },
      {
        "type": "work",
        "number": "05040302"
      }
    ]
  },
  {
    "firstname": "Matt",
    "lastname": "River",
    "phones": [
      {
        "type": "home",
        "number": "567890123"
      },
      {
        "type": "mobile",
        "number": "045678912"
      },
      {
        "type": "work",
        "number": "3214569"
      }
    ]
  }
]
```

### Test 3: person doesn't have a phone (the phone field is missing or is an empty array) not added

testData:

```json
[
  {
    "firstname": "Leila",
    "lastname": "Hökki",
    "phones": [
      {
        "type": "home",
        "number": "12345678"
      },
      {
        "type": "work",
        "number": "87654321"
      },
      {
        "type": "work",
        "number": "05040302"
      }
    ]
  },
  {
    "firstname": "Matt",
    "lastname": "River",
    "phones": []
  },
  {
    "firstname": "Vera",
    "lastname": "River"
  }
]
```

```js
const register = new PhoneRegister(testData);

register.getAllNumbers();
```

result

```json
[
  {
    "firstname": "Leila",
    "lastname": "Hökki",
    "phones": [
      {
        "type": "home",
        "number": "12345678"
      },
      {
        "type": "work",
        "number": "87654321"
      },
      {
        "type": "work",
        "number": "05040302"
      }
    ]
  }
]
```

### Test 4: all phones are missing

testData:

```json
[
  {
    "firstname": "Leila",
    "lastname": "Hökki",
    "phones": []
  },
  {
    "firstname": "Matt",
    "lastname": "River",
    "phones": []
  },
  {
    "firstname": "Vera",
    "lastname": "River"
  }
]
```

```js
const register = new PhoneRegister(testData);

register.getAllNumbers();
```

results []
