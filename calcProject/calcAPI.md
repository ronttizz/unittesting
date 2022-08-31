# Calc library API

## **sum(a,b)**

Function returns the sum of two numbers. Numbers are passed to the function as parameters.

Parameters: a and b are numbers

Returns: the sum of given numbers

- if parameter is missing, throws and exception: `'parameter missing'`
- if both parameters are given but parameters are not numbers, throws an exception: `'only numbers allowed'`

### Test cases

#### 1. Integers

- sum(1,1) return 2
- sum(2,3) return 5
- sum(12,100) return 112

[2, -4, -2],
[-4, 2, -2],
[0, 0, 0],
[0, 3, 3],
[3, 0, 3],
[0, -3, -3],
[-3, 0, -3]

#### 2. Floats

sum(10, 11.5) return 21.5

[2.5, 3, 5.5],
[-2.5, 3, 0.5],
[3, -2.5, 0.5],
[-2.5, -3, -5.5],
[-2.5, -2.5, -5.0],
[-2.5, 0, -2.5],
[2.5, -2.5, 0],
[2.4, -2.5, -0.1]

#### 3. Missing parameter

- sum() throws an exception `'parameter missing'`
- sum(1) throws an exception `'parameter missing'`
- sum("l") throws an exception `'parameter missing'`
- sum("") throws an exception `'parameter missing'`

#### 4. Parameters are not numbers

- sum("1", "2") throws an exception `'only numbers allowed'`
- sum("a", 1) throws an exception `'only numbers allowed'`
- sum(1, "a") throws an exception `'only numbers allowed'`
- sum("a", "b") throws an exception `'only numbers allowed'`
- sum("", "") throws an exception `'only numbers allowed'`
- sum(null, 1) throws an exception `'only numbers allowed'`
- sum(1, null) throws an exception `'only numbers allowed'`
- sum(undefined, 1) throws an exception `'only numbers allowed'`
- sum(1, undefined) throws an exception `'only numbers allowed'`

["1", "2"],
["a", 1],
[1, "a"],
['a', 'b'],
['', ''],
[null, 1],
[undefined, 1]

### **subtract(a,b)**

Function return the difference a-b of two numbers. Numbers are passed to the function as parameters

Parameters: a and b are numbers

Returns: the sum of given numbers

- if parameter is missing, throws and exception: `'parameter missing'`
- if both parameters are given but parameters are not numbers, throws an exception: `'only numbers allowed'`

#### Integers

[2, -4, -2],
[-4, 2, -2],
[0, 0, 0],
[0, 3, -3],
[3, 0, -3],
[0, -3, -3],
[-3, 0, -3]

#### Floats

[10, 11.5, -1.5],
[-2.5, 3, -5.5],
[2.5, 2.5, 0],
[2.4, -2.5, 4.9],

#### 3. Missing parameter

- sum() throws an exception `'parameter missing'`
- sum(1) throws an exception `'parameter missing'`
- sum("l") throws an exception `'parameter missing'`
- sum("") throws an exception `'parameter missing'`

#### 4. Parameters are not numbers

- sum("1", "2") throws an exception `'only numbers allowed'`
- sum("a", 1) throws an exception `'only numbers allowed'`
- sum(1, "a") throws an exception `'only numbers allowed'`
- sum("a", "b") throws an exception `'only numbers allowed'`
- sum("", "") throws an exception `'only numbers allowed'`
- sum(null, 1) throws an exception `'only numbers allowed'`
- sum(1, null) throws an exception `'only numbers allowed'`
- sum(undefined, 1) throws an exception `'only numbers allowed'`
- sum(1, undefined) throws an exception `'only numbers allowed'`

## DIVISION

function divide(a, b) return a/b

problems:

0/0 => NaN
2/0 => Infinity
-2/0 => -Infinity

Infinity/Infinity => 0
-Infinity/Infinity => 0
Infinity/-Infinity => 0
-Infinity/-Infinity => 0

TestValues:

[0,0,Number.NaN]
[2,0,Number.POSITIVE_INFINITY]
[-2,0,Number.NEGATIVE_INFINITY]
[Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NaN]
