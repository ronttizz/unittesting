"use strict";

const search = require("./carStorageFileCallbackV2");

try {
  //   search('model', 'Nova', console.log);
  search();
  search(console.log);
  // only one that goes through, you need all the parameters
  search(null, null, console.log);
} catch (err) {
  console.log(err.message);
}

search("licence", "ABC-1", console.log);
