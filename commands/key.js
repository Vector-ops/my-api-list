const inquirer = require("inquirer");
const { isRequired } = require("../utils/validation");
const colors = require("colors");
const KeyManager = require("../lib/KeyManager");

const key = {
	add: async () => {
		const keyManager = new KeyManager();
		const input = await inquirer.prompt([
			{
				type: "input",
				name: "name",
				message: "Enter a name for the API key".green,
				validate: isRequired,
			},
			{
				type: "input",
				name: "key",
				message: "Enter the API key".green,
				validate: isRequired,
			},
		]);

		keyManager.setKey(input.name, input.key);
	},
	del: async ({ a }) => {
		try {
			const keyManager = new KeyManager();
			const keys = keyManager.getAllKeys();
			if (a) {
				keyManager.deleteAll();
				console.log("Deleted all keys.".green);
				return;
			}
			const list = Object.entries(Object.keys(keys))[0];
			const input = await inquirer.prompt([
				{
					type: "list",
					name: "name",
					message: "Select the API key".green,
					choices: list.splice(0),
					loop: true,
					validate: isRequired,
				},
			]);
			keyManager.deleteKey(input.name);
			console.log("Key deleted".blue);
		} catch (error) {
			console.error(error.message.red);
		}
	},
	upd: async () => {
		try {
			const keyManager = new KeyManager();
			const input = await inquirer.prompt([
				{
					type: "input",
					name: "name",
					message: "Enter the name of the API key".green,
					validate: isRequired,
				},
			]);
			keyManager.getKey(input.name);
			const inputKey = await inquirer.prompt([
				{
					type: "input",
					name: "key",
					message: "Enter new API key".green,
					validate: isRequired,
				},
			]);
			keyManager.setKey(input.name, inputKey.key);
			console.log("Key updated".blue);
		} catch (error) {
			console.error(error.message.red);
		}
	},
	get: async () => {
		try {
			const keyManager = new KeyManager();
			const input = await inquirer.prompt([
				{
					type: "input",
					name: "name",
					message: "Enter the name of the API key".green,
					validate: isRequired,
				},
			]);
			const key = keyManager.getKey(input.name);
			console.log(`Name: ${input.name.green} \nKey: ${key.yellow}`);
		} catch (error) {
			console.error(error.message.red);
		}
	},
	list: async () => {
		try {
			const keyManager = new KeyManager();
			const keys = keyManager.getAllKeys();
			console.log(keys);
		} catch (error) {
			console.error(error.message.red);
		}
	},
};

module.exports = key;
