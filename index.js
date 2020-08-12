const { prompt } = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')

let licenses = ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]

// array of questions for user
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Give a description for your project.'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are the installation instructions for your application?'
  },
  {
    type: 'input',
    name: 'usage', 
    message: 'Give some information on using your application.'
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'What are the contribution guidelines for your application?'
  },
  {
    type: 'input',
    name: 'test',
    message: 'What are the testing instructions for your application?'
  },
  {
    type: 'list',
    name: 'license',
    message: 'Which license would you like to choose?',
    choices: licenses
  },
  {
    type: 'input',
    name: 'username',
    message: 'What is you GitHub username?'
  },
  {
    type: 'input',
    name: 'email_address',
    message: 'What is your email address?'
  }
]

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) { console.log(err) }
  })
}

// function to initialize program
function init() {
  prompt(questions)
  .then(res => {
    writeToFile('./testREADME.md', generateMarkdown(res))
  })
  .catch(err => console.log(err))
}

// function call to initialize program
init()
