"use strict";

const search = require("../carStorageFileCallbackV2");

describe("testing callback", () => {
  test("search with licence ABC-1", () => {
    function cb(data) {
      // cb = callback fucntion
      try {
        expect(data).toEqual([{ model: "Bored T-model", license: "ABC-1" }]);
        done();
      } catch (error) {
        done(error);
      }
    } // end of cb

    search("licence", "ABC-1", cb);
  });
});
