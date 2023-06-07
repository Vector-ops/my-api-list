const Configstore = require("configstore");
const pkg = require("../package.json");

class UserRecord {
  constructor() {
    this.conf = new Configstore(pkg.name);
  }
  setCredentials(username, password) {
    this.conf.set("username", username);
    this.conf.set("password", password);
    this.setIsVerified(false);
  }

  verify(username, password) {
    if (
      username === this.conf.get("username") &&
      password === this.conf.get("password")
    ) {
      this.setIsVerified(true);
      return true;
    }
    this.setIsVerified(false);
    throw new Error("Invalid username or password");
  }

  setIsVerified(value) {
    this.conf.set("isVerified", value);
  }

  getIsVerified() {
    return this.conf.get("isVerified");
  }
}

module.exports = UserRecord;
