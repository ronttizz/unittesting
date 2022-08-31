# Jest project

## 1. Create a project folder

## 2. Create package.json with `npm init`

```shell
npm init -y
```

OR

```shell
npm init
```

And answer questions

## 3. Install jest as devDependency

```shell
npm install jest --save-dev
```

This modifies package.json by adding devDependencies to it

```json
"devDependencies": {
    "jest": "^28.1.3"
  }
```

## 4. Modify test-script in package.json

```json
"scripts": {
    "test": "jest"
  }
```

## 5. Create test folder named `__tests__`(2 underscore characters at start and end)

## 6. Write tests

## 7. To run tests

```shell
npm test
```

## 7B. Run only one test file

```shell
npm test --testFile fileToBeTested.test.js
```
