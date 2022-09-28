"use strict";

const fs = require("fs").promises;

module.exports = class Storage {
  constructor(storageFilename) {
    this.storageFile = storageFilename;
  }

  find(key, value) {
    return new Promise(async (resolve, reject) => {
      try {
        if (key && value) {
          if (!["model", "licence"].includes(key)) {
            reject("key not found");
          } else {
            const data = await fs.readFile(this.storageFile, "utf8");
            const cars = await JSON.parse(data);
            // EXAMPLE oneliner
            // const cars = await JSON.parse(await fs.readFile(this.storageFile,'utf8'));
            const found = [];
            for (let car of cars) {
              if (car[key] == value) {
                found.push(car);
              }
            }
            resolve(found);
          }
        } else {
          reject("parameter missing");
        }
      } catch (error) {
        reject("read error");
      }
    }); // end of Promise
  } // end of find
};
