const config = require("configstore");
const pkg = require("../package.json");
const colors = require("colors");

class KeyManager {
	constructor() {
		this.conf = new config(pkg.name);
	}

	setKey(name, key) {
		this.conf.set(name, key);
		console.log("API key added.".green);
	}

	getKey(name) {
		const key = this.conf.get(name);
		if (key === null || key === undefined) {
			throw new Error("No API key found");
		}
		return key;
	}

	getAllKeys() {
		const keys = this.conf.all;
		const size = Object.entries(keys).length;
		if (size === 0) {
			throw new Error("No API keys found.");
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

	deleteAll() {
		this.conf.clear();
	}
}

module.exports = KeyManager;
