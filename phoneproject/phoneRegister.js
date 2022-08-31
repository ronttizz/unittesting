"use strict";

module.exports = class PhoneRegister {
  constructor(data) {
    if (!data) throw new Error("phone data missing");
    this.phoneData = data;
  }

  getTypes() {
    const foundTypes = [];
    for (let person of this.phoneData) {
      if (person.phones) {
        for (let phone of person.phones) {
          if (phone.type && phone.type !== "") {
            if (!foundTypes.includes(phone.type)) {
              foundTypes.push(phone.type);
            }
          }
        }
      }
    }
    return foundTypes;
  } // end of getTypes

  getPersonsNumbersByType(firstname, lastname, type) {
    if (firstname && lastname && type) {
      const numbersFound = [];

      for (let person of this.phoneData) {
        if (person.firstname === firstname && person.lastname === lastname) {
          for (let phone of person.phones) {
            if (phone.type === type) {
              numbersFound.push(phone.number);
            }
          }
          return numbersFound;
        }
      }
      return numbersFound;
    } else {
      throw new Error("missing parameter");
    }
  } // end of getPersonsNumbersByType

  getAllNumbersByType(number) {
    const foundNumbers = [];

    return foundNumbers;
  } // end of getAllNumbersByType
}; // end of class
