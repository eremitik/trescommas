const { expect } = require("chai");
const { trescommas } = require("../trescommas.js");

describe("trescommas", function () {
  it("Should throw an error if given a string input", () => {
    expect(trescommas("9")).to.deep.equal("Feed me integers please")
  });

  it("Should return a string", () => {
    const trillionaire = trescommas(1000)
    expect(typeof trillionaire).to.equal("string")
  });

  it("Should return the correct number", () => {
    const trillionaire = trescommas(1000)
    expect(trillionaire).to.equal("$1,000,000,000,000")
  });

  it("Shoud make you a billionaire even if you are broke", () => {
    const broke = trescommas(0)
    expect(broke).to.equal("$1,000,000,000")
  });
})