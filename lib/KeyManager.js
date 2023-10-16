const config = require("configstore");
const pkg = require("../package.json");
const colors = require("colors");

class KeyManager {
	constructor() {
		this.conf = new config(pkg.name);
	}

	setKey(name, key) {
		if (!this.conf.get("isVerified")) {
			throw new Error("Please login to access api keys.");
		}
		this.conf.set(name, key);
		console.log("API key added.".green);
	}

	getKey(name) {
		if (!this.conf.get("isVerified")) {
			throw new Error("Please login to access api keys.");
		}
		const key = this.conf.get(name);
		if (key === null || key === undefined) {
			throw new Error("No API key found");
		}
		return key;
	}

	getAllKeys() {
		if (!this.conf.get("isVerified")) {
			throw new Error("Please login to access api keys.");
		}
		const rKeys = this.conf.all;
		const removeKeys = ["username", "password", "isVerified"];
		const keys = Object.fromEntries(
			Object.entries(rKeys).filter(([key]) => !removeKeys.includes(key))
		);
		const size = Object.entries(keys).length;
		if (size === 0) {
			throw new Error("No API keys found.");
		}
		return keys;
	}

	deleteKey(name) {
		if (!this.conf.get("isVerified")) {
			throw new Error("Please login to access api keys.");
		}
		const key = this.conf.get(name);
		if (!key) {
			throw new Error("No API key found");
		}
		this.conf.delete(name);
		console.log("API key deleted.".green);
	}
}

module.exports = KeyManager;
