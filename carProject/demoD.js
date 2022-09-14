"use strict";

const search = require("./carStorageFilePromises");

// search().then(console.log).catch(console.log);
// search('model', 'GTX')
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));
// search('model', 'GTX')
//   .then((data) => print(data))
//   .catch((err) => console.log(err));

// function print(dataArray) {
//   for (let car of dataArray) {
//     console.log(car.licence);
//   }
// }

// (async () => {
//   try {
//     console.log(await search());
//     console.log("### ONE ###");
//     const result = await search("model", "GTX");
//     console.log(result);
//     console.log("### TWO ###");
//     console.log(await search("licence", "ABC-1"));
//     console.log("### THREE ###");
//   } catch {
//     console.log("Sorry! " + err);
//   }
// })();

async function run() {
  try {
    const result = await search();
    console.log(result);
    for (let car of result) {
      console.log(car.model.toUpperCase());
    }

    const licenceResult = await search("licence", "ABC-123");
    if (licenceResult.length > 0) {
      console.log(licenceResult[0].model);
    } else {
      console.log("no cars found");
    }
  } catch (err) {
    console.log(err.message);
  }
}

run();
