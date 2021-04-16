const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const teamMembers = [];
const idArray = [];

// create writeFile function using promises instead of a callback function
const writeFileSync = util.promisify(fs.writeFile);

// Create an array of questions for user input
const promptUser = () => {
  console.log("Please build you team");
  createManager();
};
function createManager() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the team managers name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is the team managers id?",
        name: "id",
      },
      {
        type: "input",
        message: "What is the team managers email?",
        name: "email",
      },
      {
        type: "input",
        message: "What is the team managers office number?",
        name: "number",
      },
    ])
    .then((answers) => {
      const manager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        answers.number
      );
      teamMembers.push(manager);
      idArray.push(answers.id);
      createTeam();
    });
}

function createTeam() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "What type of team member would you like to add?",
        name: "member",
        choices: [
          "Engineer",
          "Intern",
          "I don't want to add any more team members",
        ],
      },
    ])
    .then((userChoice) => {
      switch (userChoice.memberChoice) {
        case "Engineer":
          addEngineer();
          break;
        case "Intern":
          addIntern();
          break;
        default:
          buildTeam();
      }
    });
}

function addEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is your engineers name",
        name: "name",
      },
      {
        type: "input",
        message: "What is your engineers id?",
        name: "id",
      },
      {
        type: "input",
        message: "What is your engineers email?",
        name: "email",
      },
      {
        type: "input",
        message: "What is your GitHub username?",
        name: "username",
      },
    ])
    .then((answers) => {
      const engineer = new Engineer(
        answers.name,
        answers.id,
        answers.email,
        answers.username
      );
      teamMembers.push(engineer);
      idArray.push(answers.id);
      createTeam();
    });
}
function addIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is your interns name",
        name: "name",
      },
      {
        type: "input",
        message: "What is your interns id?",
        name: "id",
      },
      {
        type: "input",
        message: "What is your interns email?",
        name: "email",
      },
      {
        type: "input",
        message: "What is your interns school name?",
        name: "school",
      },
    ])
    .then((answers) => {
      const intern = new Intern(
        answers.name,
        answers.id,
        answers.email,
        answers.school
      );
      teamMembers.push(intern);
      idArray.push(answers.id);
      createTeam();
    });
}

const generateHTML = (answers) =>
  `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
    <title>My Team</title>
</head>

<body>
    <header class="jumbotron bg-danger text-light">
        <div class="container">
            <div class="row align-items-end text-center">
                <div class="my team">
                    <h1>My Team</h1>
                </div>
            </div>
        </div>
    </header>

    <main class="container">
        <section class="row my-4">
            <div class="col-12 col-md-9">
                <section class="row justify-content-around">
                <div class="col-12 col-sm-6 col-lg-4 mb-3">
                    <div class="card">
                        <h3 class="card-header bg-info">
                            Manager
                        </h3>
                        <div class="card-body"></div>
                    </div>
                </div>

                    <div class="col-12 col-sm-6 col-lg-4 mb-3">
                        <div class="card">
                            <h3 class="card-header bg-success">
                                Engineer
                            </h3>
                            <div class="card-body">
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-lg-4 mb-3">
                        <div class="card">
                            <h3 class="card-header bg-warning">
                                Intern
                            </h3>
                            <div class="card-body">
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    </body>
</html>`;

// writeFileAsync as a promise
const init = () => {
  promptUser()
    .then((answers) => writeFileSync("index.html", generateHTML(answers)))
    .then(() => console.log("Successfully wrote to index.html"))
    .catch((err) => console.error(err));
};

init();
