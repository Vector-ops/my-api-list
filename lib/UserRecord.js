const Configstore = require("configstore");
const pkg = require("../package.json");

class UserRecord {
  constructor() {
    this.conf = new Configstore(pkg.name);
    this.isVerified = false;
  }
  set username(username) {
    this.conf.set("username", username);
  }
  set password(password) {
    this.conf.set("password", password);
  }

  verify(username, password) {
    if (
      username === this.conf.get("username") &&
      password === this.conf.get("password")
    ) {
      this.isVerified = true;
      return true;
    }
    this.isVerified = false;
    throw new Error("Invalid username or password");
  }
}

module.exports = UserRecord;
