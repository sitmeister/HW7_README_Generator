// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the title/name of your project?',
    },
    {
      type: 'input',
      name: 'purpose',
      message: `Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:
      - What was your motivation?
      - Why did you build this project?
      - What problem does it solve?
      - What did you learn?'`
    },
    {
      type: 'input',
      name: 'contributors',
      message: 'Were there any contributors to your project? Give them a shout out here:',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Are you using a license with your project? If so, select which:',
      choices: ['none', 'MIT']
    },
    {
      type: 'confirm',
      name: 'installation_confirm',
      message: 'Do you have any Installation instructions?',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Please give your installation instructions here:',
      when: (answers) => answers.installation_confirm === true,
    },
    {
      type: 'input',
      name: 'usage_information',
      message: 'Please give your usage information here:',
    },
    {
      type: 'input',
      name: 'test',
      message: 'Did you use any testing for your project? If so, list them here:',
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is your Github username?'
    },
    {
      type: 'input',
      name: 'email',
      message: 'What email can you be reached at?',
    }
  ];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('Successfully created README.md!')
  )
};

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((data) => {
    const readmePageContent = generateMarkdown.generateMarkdown(data)
    writeToFile("README.md", readmePageContent)
    })
};

// Function call to initialize app
init();
