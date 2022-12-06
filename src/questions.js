const managerInfo = [
    {
        type: 'input',
        message: 'What is the team manager\'s name?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is the team manager\'s employee id?',
        name: 'id',
    },
    {
        type: 'input',
        message: 'What is the team manager\'s email address?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is the team manager\'s office number?',
        name: 'office',
    },
];

const engineerInfo = [
    {
        type: 'input',
        message: 'What is the engineer\'s name?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is the engineer\'s employee id?',
        name: 'id',
    },
    {
        type: 'input',
        message: 'What is the engineer\'s email address?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is the engineer\'s GitHub username?',
        name: 'github',
    },
];

const internInfo = [
    {
        type: 'input',
        message: 'What is the intern\'s name?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is the intern\'s employee id?',
        name: 'id',
    },
    {
        type: 'input',
        message: 'What is the intern\'s email address?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is the name of the intern\'s school?',
        name: 'school',
    },
];

const menuInfo = [
    {
        type: 'list',
        message: 'Do you need to add additional team members?',
        name: 'menu',
        choices: ['Engineer', 'Intern', 'I am finished'],
    }
];

module.exports = {
    managerInfo,
    engineerInfo,
    internInfo,
    menuInfo
};