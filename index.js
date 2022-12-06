const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const { managerInfo, engineerInfo, internInfo, menuInfo } = require('./src/questions');

const employees = [];

//create a function that runs inquirer prompt questions .then(() => inquirer.prompt().then) // chain promises

// Prompts user for team manager's name, employee ID, email address, and office number
function getManagerInfo() {
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
// Iterates through all employees and console logs all employee info
function finished() {
    console.log("number of employees:", employees.length);
    employees.forEach(employee => {
        console.log("name:", employee.getName());
        console.log("id:", employee.getId());
        console.log("email:", employee.getEmail());
        console.log("role:", employee.getRole());

        switch (employee.getRole()) {
            case 'Manager':
                console.log("office number:", employee.getOfficeNumber());
                break;
            case 'Engineer':
                console.log("github:", employee.getGithub());
                break;
            case 'Intern':
                console.log("school:", employee.getSchool());
                break;
            default:
                break;
        };
    });
}

getManagerInfo();