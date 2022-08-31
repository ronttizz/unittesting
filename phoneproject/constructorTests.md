#Test Cases for constructor

## Test that the missing parameter throws an exception

- constructor() -> throws `'phone data missing'`

```js
new PhoneRegister();
```

this will throw an exception `'phone data missing'`

- constructor(json) -> no return
