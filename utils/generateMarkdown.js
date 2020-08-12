// function to generate markdown for README
function generateMarkdown(data) {
  return `

  # ${data.title}
  
  ![License](https://img.shields.io/badge/license-${data.license.replace(' ', '%20')}-blue.svg)

  ${data.description}
  
  ## Table of Contents

  * [Installation](#install)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [License](#license)
  * [Questions](#questions)
  
  ## <a name="install"></a> Installation
  
  ${data.installation}
  
  ## <a name="usage"></a> Usage
  
  ${data.usage}
  
  ## <a name="contributing"></a> Contributing
  
  ${data.contributing}
  
  ## <a name="tests"></a> Tests
  
  ${data.test}

  ## <a name="license"></a> License

  This application is licensed under the ${data.license} license. Use of this application must be in compliance with the ${data.license} license.
  
  ## <a name="questioning"></a> Questions

  Visit my [GitHub](https://github.com/${data.username})

  Email [${data.email_address}](${data.email_address}) for additional questions.
  `
}

module.exports = generateMarkdown
