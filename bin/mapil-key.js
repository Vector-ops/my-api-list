const program = require("commander");
const key = require("../commands/key");

program
	.command("add")
	.description("Add a new key")
	.action(() => {
		key.add();
	});

program
	.command("del")
	.description("Delete a key")
	.action(() => {
		key.del();
	});

program
	.command("upd")
	.description("Update a key")
	.action(() => {
		key.upd();
	});

program
	.command("get")
	.description("Get a key")
	.action(() => {
		key.get();
	});

program
	.command("list")
	.description("List all keys")
	.action(() => {
		key.list();
	});

program.parse(process.argv);
