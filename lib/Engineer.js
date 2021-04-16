// constant Employee
const Employee = require("./Employee");

// create Engineer class
class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }
  getRole() {
    return "engineer";
  }
  getGitHub() {
    return this.github;
  }
}

module.exports = Engineer;
