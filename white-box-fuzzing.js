const { FuzzedDataProvider } = require("@jazzer.js/core");

class WhiteBoxFuzzing {
  #provider;
  constructor(data) {
    this.#provider = new FuzzedDataProvider(data);
  }
  getDecision() {
    const value = this.#provider.consumeBoolean();

    console.log(
      `getDecision() was called and value: ${value} will be returned`
    );

    return value;
  }

  getString() {
    return this.#provider.consumeString(4096);
  }
}

module.exports.initializeWhiteBoxFuzzing = (data) => {
  globalThis.__whiteBoxFuzzing = new WhiteBoxFuzzing(data);
};
