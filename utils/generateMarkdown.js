// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return "![MIT](https://img.shields.io/badge/License-MIT-yellow.svg)"
  } else {
    return ""
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string 
function renderLicenseLink(license) {
  if (license === "MIT") {
    return `This project is covered under an MIT license. More information can be found here: https://opensource.org/licenses/MIT`
  } else {
    return ""
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "MIT") {
    return '- [License](#license)'
  } else {
    return ""
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

return `
# ${data.title}

${renderLicenseBadge(data.license)}
## Description
${data.purpose}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
${renderLicenseSection(data.license)}
- [Tests](#tests)
- [Qustions](#questions)

## Installation
${data.installation}

## Usage
${data.usage_information}

## Credits
Collaborators that helped with this project: ${data.contributors}

## License
${renderLicenseLink(data.license)}

## Tests
${data.test}

## Questions
If you have any questions, feel free to email <${data.email}> or feel free to peruse my [Github](https://github.com/${data.github})!
`;
}

module.exports = {generateMarkdown};

// ## Table of Contents
// If your README is long, add a table of contents to make it easy for users to find what they need.
// - [Installation](#installation)
// - [Usage](#usage)
// - [Credits](#credits)
// - [License](#license)
// ## Installation
// What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.
// ## Usage
// Provide instructions and examples for use. Include screenshots as needed.
// To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:
//     ```md
//     ![alt text](assets/images/screenshot.png)
//     ```

// 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License',
//       'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0',
//       'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unlicense'