// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const chalk = require('chalk')
const fs = require('fs')

// TODO: Create an array of questions for user input
// const questions = [];

inquirer
    .prompt([
        {
            type: 'input',
            message: chalk.blue('What is the Project Title?'),
            name: 'title',
        },
        {
            type: 'input',
            message: chalk.green('Description of the Application?'),
            name: 'description',
        },
        {
            type: 'input',
            message: chalk.red('Usage Information'),
            name: 'info',
        },
        {
            type: 'input',
            message: chalk.yellow('Contribution Guidelines'),
            name: 'guidelines',
        },
        {
            type: 'input',
            message: chalk.blue('What are the resting instructions?'),
            name : 'instructions'
        },
        {
            type: 'checkbox',
            message: chalk.green('Licenses?'),
            choices: [ "HTML", "Javascript", "C++", "Python"],
            name: 'license',
        },
        {
            type: 'input',
            message: chalk.red('What is you GitHub Username?'),
            name: "github",
        },
        {
            type: 'input',
            message: chalk.yellow('What is your Email address?'),
            name: 'email',
        }

    ])
    
    

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();