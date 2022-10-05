# Test cases for the Dice class

## **constructor**

### 1. no upper bound given

- constructor(), initializes a dice with upper bound, maximumValue 6 and minimumValue 1, dot count 0

### 2. upper bounds between 2-20, inclusive

- constructor(2), initializes a dice with upper bound 2, dot count 0
- constructor(6), initializes a dice with upper bound 6, dot count 0
- constructor(20), initializes a dice with upper bound 20, dot count 0

[
[2],
[6],
[20]
]

### 3. exceptions

- constructor(0) throws exception `'upper bound too small'`
- constructor(1) throws exception `'upper bound too small'`
- constructor(-1) throws exception `'upper bound too small'`
- constructor(21) throws exception `'upper bound too big'`

- constructor("a") throws exception `'upper bound must be an integer'`
- constructor(2.5) throws exception `'upper bound must be an integer'`

[
[0],
[1],
[-1],
[21],
["a"],
[2.5]
]

## METHODS

### **roll()**

- create a dice with no upper bound. Upper bound should be 6, when rolled the dot count should be between 1 and 6.
- create dice with upper bounds 2-20. => after rolling dot count should be between 2 and 20
- roll() dot count >=1 and <=upper bound, !== 0

### **toString()**

In both cases create a new dice (no upper bound given)

- roll the dice. Compare result string to dots as string
- don't roll the dice, returns `'Not rolled yet'`
