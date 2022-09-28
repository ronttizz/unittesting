"use strict";

const fs = require("fs").promises;

module.exports = class Storage {
  constructor(storageFilename) {
    this.storageFile = storageFilename;
  }

  find(key, value) {
    return new Promise(async (resolve, reject) => {});
  }
};
