const inquirer = require("inquirer");
const colors = require("colors");
const { isRequired } = require("../utils/validation");
const UserRecord = require("../lib/UserRecord");

const user = {
  register: async () => {
    const newUser = new UserRecord();
    const input = await inquirer.prompt([
      {
        type: "input",
        name: "username",
        message: "Enter username".green,
        default: "Username",
        validate: isRequired,
      },
      {
        type: "password",
        name: "password",
        message: "Enter password".green,
        mask: "*",
        validate: isRequired,
      },
    ]);
    newUser.username = input.username;
    newUser.password = input.password;
  },
  login: async () => {
    try {
      const userRecord = new UserRecord();
      const input = await inquirer.prompt([
        {
          type: "input",
          name: "username",
          message: "Enter your username".green,
          default: "Username",
          validate: isRequired,
        },
        {
          type: "password",
          name: "password",
          message: "Enter your password".green,
          mask: "*",
          validate: isRequired,
        },
      ]);
      userRecord.verify(input.username, input.password);
      if (userRecord.isVerified) {
        console.log("Login successful".green);
      }
    } catch (error) {
      console.error(error.message.red);
    }
  },
};
module.exports = user;
