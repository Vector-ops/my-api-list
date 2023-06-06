const program = require("commander");
const colors = require("colors");
const user = require("../commands/user");

program
  .command("register")
  .description("Register a new user")
  .action(() => user.register());

program
  .command("login")
  .description("Login to an existing user")
  .action(() => user.login());

program.parse(process.argv);
