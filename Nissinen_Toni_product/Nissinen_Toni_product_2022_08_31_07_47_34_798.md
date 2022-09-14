Toni Nissinen

# **End assignment** (product)

## Task: Create and test ProductStorage class

Create a class `ProductStorage` for product data. Data storage is passed to the constractor as a parameter. Data is in a json array. Use the following json array as default storage. You may need to modify the data or add more versions for testing.

### datastorage.json

```json
[
  {
    "productNumber": 1,
    "name": "Tako delux",
    "type": "toaster",
    "price": 300,
    "manufacturer": "Penquin appliances",
    "colors": ["black", "blue", "green"],
    "info": {
      "energyclass": "A+",
      "model": "gold",
      "comments": "no comments"
    }
  },
  {
    "productNumber": 2,
    "name": "Future 2025",
    "type": "moccamaster",
    "price": 300,
    "manufacturer": "Leila Hökki & co",
    "colors": ["green", "white", "orange"],
    "info": {
      "energyclass": "E",
      "model": "chrome",
      "comments": "-"
    }
  },
  {
    "productNumber": 3,
    "name": "MaxEffect 2000",
    "type": "phone",
    "price": 15,
    "manufacturer": "Leila Hökki & co",
    "colors": ["red", "green", "yellow"],
    "info": {
      "energyclass": "B",
      "model": "gold",
      "comments": "no comments"
    }
  },
  {
    "productNumber": 4,
    "name": "MaxEffect 2000",
    "type": "radio",
    "price": 36,
    "manufacturer": "Electric devices",
    "colors": ["green", "orange", "white"],
    "info": {
      "energyclass": "C",
      "model": "silver",
      "comments": "-"
    }
  },
  {
    "productNumber": 5,
    "name": "Tako delux",
    "type": "toaster",
    "price": 15,
    "manufacturer": "Ocean",
    "colors": ["blue", "black", "yellow"]
  }
]
```

# ProductStorage API

## Constructor

### **constructor(jsondata)**

Initializes ProductStorage object

> Parameters:
>
> > The data storage json object is passed as a parameter to the constructor.

> Returns:
>
> >

> Throws:
>
> > If the parameter is missing, constructor throws an error `'data storage missing'`

## Methods

### **get_total_price_of_products_by_type(searchValue)**

returns the total price of all cars that have the same type than the given searchValue

> Parameters:
>
> > searchValue is the type of the product to be searched

> Returns:
>
> > total cumulative price of products matching the searchValue

> Throws:
>
> > if no product with the given searchValue is found throws an exeption `'nothing found with given'`. If a parameter searchValue is missing, an exeption `'missing parameter'` is thrown

### **has_info(searchKey)**

Method checks based on productNumber if the product has `info` or not.

> Parameters:
>
> > searchKey is the productNumber to be searched

> Returns:
>
> > Returns true if the product matching the searchKey has `info` object and it is not an empty array else returns false. If parameter searchKey is missing false is returned

> Throws:
>
> >

### **get_All_products_By_type(searchValue)**

searches products with given type

> Parameters:
>
> > searchValue is the type of the product to be searched

> Returns:
>
> > Returns an array of product objects of given type. If no product of given type is found, returns an empty array.

> Throws:
>
> > If a parameter searchValue is missing, an exeption `'missing parameter'` is thrown

### **get_product_colors(searchKey)**

Returns an array of product colors. If none found, returns an empty array.

> Parameters:
>
> > searchKey is the productNumber of the product

> Returns:
>
> > colors of the product as an array or if none is found or it is empty or parameter searchKey is missing, returns an empty array.

> Throws:
>
> >

### **get_Price(productNumber)**

get the price of the product

> Parameters:
>
> > productNumber of the product which price is to be returned

> Returns:
>
> > returns the price of a product matching the given productNumber

> Throws:
>
> > if no product with the given productNumber is found throws an exeption `'nothing found with given'`

# The project

## Create a folder for the testproject

- the name of the folder should be `Nissinen_Toni_product`
- create **package.json**
  - **`npm init -y`**
- install **jest** as development dependency
  - **`npm install jest --save-dev`**
- create folder `__tests__` for tests
- edit the test script in the **package.json**
- use **datastorage.json** as a data source

## Design test cases in separate .md -file

## Implement all tests and test them to fail

## Implement corresponding methods

## Test the project until all tests pass

## Submit the project folder

Submit your project folder acording to instructions given separately.
Remove the `node_modules` folder before submitting.
The project folder should include `package.json` file
