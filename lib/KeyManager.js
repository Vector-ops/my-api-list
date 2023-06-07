const config = require("configstore");
const pkg = require("../package.json");
const UserRecord = require("./UserRecord");

class KeyManager {
  constructor() {
    this.conf = new config(pkg.name);
  }

  setKey(name, key) {
    this.conf.set(name, key);
  }

  getKey(name) {
    const key = this.conf.get(name);
    if (key === null || key === undefined) {
      throw new Error("No API key found");
    }
    return key;
  }

  getAllKeys() {
    const rKeys = this.conf.all;
    const removeKeys = ["username", "password", "isVerified"];
    const keys = Object.fromEntries(
      Object.entries(rKeys).filter(([key]) => !removeKeys.includes(key))
    );
    const size = Object.entries(keys).length;
    if (!keys || size === 0) {
      throw new Error("No API keys found");
    }
    return keys;
  }

  deleteKey(name) {
    const key = this.conf.get(name);
    if (!key) {
      throw new Error("No API key found");
    }
    this.conf.delete(name);
  }
}

module.exports = KeyManager;
