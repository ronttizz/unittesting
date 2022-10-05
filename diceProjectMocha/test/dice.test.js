"use strict";

const expect = require("chai").expect;

// TWO POSSIBLE WAYS TO REQUIRE CHAI EXPECT
// const chai = require("chai");
// const expect = chai.expect;

const Dice = require("../dice");

describe("methods defined", function () {
  const dice = new Dice();

  it("getter maximumValue defined", function () {
    expect(dice).to.have.a.property("maximumValue");
  });

  it("method roll defined", function () {
    expect(dice).to.have.a.property("roll");
  });

  it("toString is defined", function () {
    expect(dice).to.have.a.property("toString");
  });
});
