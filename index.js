const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const { managerInfo, engineerInfo, internInfo, menuInfo } = require('./src/questions');
const generateHTML = require('./src/generateHTML');

const filePath = './dist/index.html';
const employees = [];
const employeeCards = [];

//create a function that runs inquirer prompt questions .then(() => inquirer.prompt().then) // chain promises

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
                finished();
                break;
            default:
                finished();
                break;
        }
    });
}

// end point = loop employee array = convert into html
// Iterates through all employees
function finished() {
    console.log("number of employees:", employees.length);
    // generateHTML();
    
    employees.forEach(employee => {

        let name = employee.getName();
        let id = employee.getId();
        let email = employee.getEmail();
        let role = employee.getRole();
        let employeeCard;

        switch (role) {
            case 'Manager':
                let office = employee.getOfficeNumber();
                employeeCard = generateHTML.generateCard(name, id, email, role, office);
                break;
            case 'Engineer':
                let github = employee.getGithub();
                employeeCard = generateHTML.generateCard(name, id, email, role, github);
                break;
            case 'Intern':
                let school = employee.getSchool();
                employeeCard = generateHTML.generateCard(name, id, email, role, school);
                break;
            default:
                throw(console.error("No role found"));
        }
        
        employeeCards.push(employeeCard);
        
    });

    let employeeData = employeeCards.join('');
    writeToFile(filePath, employeeData);
}

function writeToFile(fileName, data) {
    let text = generateHTML.generateFileText(data);

    fs.writeFile(fileName, text, () => {
        console.log('Pizza is out the oven!');
        console.log('Your HTML file can be found at `./dist/index.html`');
    })
}

init();