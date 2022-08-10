// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const chalk = require('chalk')
const fs = require('fs')
// const { create } = require('domain')

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
            message: chalk.blue('What are the installation instructions?'),
            name : 'instructions'
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
            message: chalk.yellow('What are the test Instructions'),
            name: 'test',
        },
        {
            type: 'list',
            message: chalk.green('Licenses?'),
            choices: [ "MIT", "Javascript", "C++", "Python"],
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
    
    .then((response) => {

        const readPage = `<div align="center"> 

# ${response.title}\n </div> 

<br> 

${renderLicenseBadge(response.license)}

## About The Project\n 

        ${response.description}\n

<br>

## Table of Contents\n 

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contribute](#contributing)
- [Test](#tests)
- [Question](#questions)


<br>

## Installation\n 

        ${response.instructions}\n 

<br>

## Usage\n 

        ${response.info}\n 

<br>

## License\n

Licensed under the ${renderLicenseLink(response.license)} license.

<br>

## Contributing\n 

            ${response.guidelines}

<br>

## Tests\n 

            ${response.test}

<br>

## Questions\n - ${response.email}\n - ${response.github}\n `
        

        fs.writeFile('README.md', (readPage), (err) => {
            err ? console.error(err) : console.log('ReadMe Created!')
        } )

        function renderLicenseBadge(license) {
            if(license === "MIT") {
                return "![License: MIT](https://img.shields.io/badge/License-MIT-orange)";
            } else {
                return " "
            }
        }

        function renderLicenseLink(license) {
            if (license === 'MIT' ) {
                return "[MIT](https://choosealicense.com/licenses/mit/)"
            
            }
        }
    })

    // TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string


// TODO: Create a function that returns the license link
// If there is no license, return an empty string




// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();