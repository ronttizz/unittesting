"use strict";

// const search = require("./carStorageNoFileRead");
const search = require("./carStorageFileVersionNotWorking");

console.log(search());
console.log("### one ###");
console.log(search("model", "Nova"));
console.log("### two ###");
console.log(search("licence", "ABC-1"));
console.log("### three ###");
