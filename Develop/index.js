// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    message: 'What is the title?',
    name: 'title'

},
{
    type: 'input',
    message: 'What is your description?',
    name: "description",
},
{
    type: 'input',
    message: 'How do you use this application',
    name: 'Usage_info',
},
{
    type: 'input',
    message: 'Who are the contributors',
    name: 'contributors',
},
{
    type: 'input',
    message: 'What are the test instructions',
    name: 'Test',
},
{
    type: 'input',
    message: 'What is your license?',
    name: "license",
},
{
    type: 'input',
    message: 'Enter github username',
    name: 'github_username',
},
{
    type: 'input',
    message: 'Enter email address',
    name: 'Email_address',
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync (fileName,generateMarkdown(data))
 }

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((response) => {
writeToFile("README.md", response)
        })
}
// Function call to initialize app
init();
