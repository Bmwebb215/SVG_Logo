const inquirer = require('inquirer');
const { Circle, Square, Triangle } = require('./shapes');

async function getUserInput() {
  const answers = await inquirer.prompt([
    {
      type: 'list',
      name: 'shape',
      message: 'What shape would you like to draw?',
      choices: ['Circle', 'Square', 'Triangle'],
    },
    {
      type: 'input',
      name: 'color',
      message: 'What color would you like to draw?',

    },
    {
        type: 'input',
        name: 'text',
        message: 'Enter the text for the logo (up to 3 characters):',
        validate: input => {
          if (input.length > 3) {
            return 'Text can only be up to 3 characters.';
          }
          return true;
        }
      },
  ]);
  return answers;
}

module.exports = getUserInput;