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

describe("Create dice with no upper bound given", function () {
  const dice = new Dice();

  it("maximum dot count is 6", function () {
    expect(dice.maximumValue).to.equal(6);
  });

  it("minimum dot count is 1", function () {
    expect(dice.minimumValue).to.equal(1);
  });

  it("dots is 0", function () {
    expect(dice.dots).to.equal(0);
  });
});
