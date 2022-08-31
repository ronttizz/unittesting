# Dice class API

This is a Dice class for dice games. Dice stores the number of dots. The number of dots is between 1 and given upper bound (included). The maximum is 20. The minimum upper bound 2. If the dice hasn't been rolled, the number of dots is 0. After the dice has been rolled, the dot count can't become zero again.

## Operations

### **constructor(upperBound)**

- intializes the dice with upper bound that is passed as a parameter
- if upper bound is not given, the default upper bound is 6
- initializes dot count to 0

- if upper bound is not an integer, throws an exception `'upper bound must be an integer'`

- if upper bound is not between 2 and 20, en exception is thrown:
  - upper bound >20: `'upper bound too big'`
  - upper bound <2: `'upper bound too small'`

## Methods

### **roll()**

- rolls the dice
- when rolled, the dot count become a random number between 1 and the upper bound
- return nothing

### **toString()**

- returns dot count as a string. For example: `'4'`
- if the dice hasn't been rolled yet, returns a text `'Not rolled yet'`

## Getters

### **dost**

- return the number of dots

### **minumumValue**

- returns the minimum number of dots of the dice. It should be 1.

### **maximumValue**

- returns the upper bound of the dice
