const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const { managerInfo, engineerInfo, internInfo, menuInfo } = require('./src/questions');
const generateHTML = require('./src/generateHTML');
const generateCard = require('./src/generateCard');

const filePath = './dist/index.html';
const employees = [];
const employeeCards = [];

// Prompts user for team manager's name, employee ID, email address, and office number
function init() {
    inquirer.prompt(managerInfo).then((answers) => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.office);
        employees.push(manager);
        menuPrompt();
    });
}

// Prompts for employee info and github username
function getEngineerInfo() {
    inquirer.prompt(engineerInfo).then((answers) => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        employees.push(engineer);
        menuPrompt();
    });
}

// Prompts for employee info and school name
function getInternInfo() {
    inquirer.prompt(internInfo).then((answers) => {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        employees.push(intern);
        menuPrompt();
    });
}

// Prompts menu for adding another employee or to finish
function menuPrompt() {
    inquirer.prompt(menuInfo).then((answers) => {
        switch(answers.menu) {
            case 'Engineer':
                getEngineerInfo();
                break;
            case 'Intern':
                getInternInfo();
                break;
            case 'I am finished':
                generateRoster();
                break;
            default:
                generateRoster();
                break;
        }
    });
}

// Iterates through all employees and generates card HTML. When finished, writes data with writeToFile
function generateRoster() {
    
    employees.forEach(employee => {

        let name = employee.getName();
        let id = employee.getId();
        let email = employee.getEmail();
        let role = employee.getRole();
        let employeeCard;

        switch (role) {
            case 'Manager':
                let office = employee.getOfficeNumber();
                employeeCard = generateCard(name, id, email, role, office);
                break;
            case 'Engineer':
                let github = employee.getGithub();
                employeeCard = generateCard(name, id, email, role, github);
                break;
            case 'Intern':
                let school = employee.getSchool();
                employeeCard = generateCard(name, id, email, role, school);
                break;
            default:
                throw(console.error("No role found"));
        }
        
        employeeCards.push(employeeCard);
        
    });

    let employeeData = employeeCards.join('');
    writeToFile(filePath, employeeData);
}

// Packages HTML file text with generateHTML and writes to ./dist/index.html
function writeToFile(fileName, data) {
    let text = generateHTML(data);

    fs.writeFile(fileName, text, () => {
        console.log('Pizza is out the oven!');
        console.log('Your Team Roster file can be found at `./dist/index.html`');
    })
}

init();