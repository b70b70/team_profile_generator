const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

const teamMembers = [];

// Function to prompt for Manager information
function promptForManager() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter the manager's name:",
        },
        {
            type: "input",
            name: "id",
            message: "Enter the manager's employee ID:",
        },
        {
            type: "input",
            name: "email",
            message: "Enter the manager's email address:",
        },
        {
            type: "input",
            name: "officeNumber",
            message: "Enter the manager's office number:",
        },
    ]).then((answers) => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        teamMembers.push(manager);
        promptForTeamMember();
    });
}

// Function to prompt for adding a team member (Engineer or Intern)
function promptForTeamMember() {
    inquirer.prompt([
        {
            type: "list",
            name: "role",
            message: "Select the role of the team member:",
            choices: ["Engineer", "Intern", "Finish building the team"],
        },
    ]).then((answer) => {
        if (answer.role === "Engineer") {
            promptForEngineer();
        } else if (answer.role === "Intern") {
            promptForIntern();
        } else {
            // Finish building the team and generate HTML
            generateTeamHTML();
        }
    });
}

// Function to prompt for Engineer information
function promptForEngineer() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter the engineer's name:",
        },
        {
            type: "input",
            name: "id",
            message: "Enter the engineer's employee ID:",
        },
        {
            type: "input",
            name: "email",
            message: "Enter the engineer's email address:",
        },
        {
            type: "input",
            name: "github",
            message: "Enter the engineer's GitHub username:",
        },
    ]).then((answers) => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        teamMembers.push(engineer);
        promptForTeamMember();
    });
}

// Function to prompt for Intern information
function promptForIntern() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter the intern's name:",
        },
        {
            type: "input",
            name: "id",
            message: "Enter the intern's employee ID:",
        },
        {
            type: "input",
            name: "email",
            message: "Enter the intern's email address:",
        },
        {
            type: "input",
            name: "school",
            message: "Enter the intern's school:",
        },
    ]).then((answers) => {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        teamMembers.push(intern);
        promptForTeamMember();
    });
}

// Function to generate HTML and write it to a file
function generateTeamHTML() {
    const html = render(teamMembers);
    fs.writeFileSync(outputPath, html);
    console.log("Team HTML file has been generated.");
}

// Start by prompting for the Manager's information
promptForManager();
