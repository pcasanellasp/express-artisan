const arg = require('arg')
const inquirer = require('inquirer')
const questions = require('./questions')

function getArgs (options) {
  try {
    const args = arg(
      {
        // Options
        '--name': String, // Project or resource Name

        // Make
        '--controller': Boolean, // With Controller
        '--model': Boolean, // With Model
        '--route': Boolean, // With Route
        '--test': Boolean, // With Test

        // Create
        '--git': Boolean, // git Init
        '--install': Boolean, // npm install
        '--db': String, // Database select
        '--api': String, // API select
        '--view': String, // View Engine Select
        '--auth': Boolean, // Auth Resource
        '--cors': Boolean, // Allow Cors
        '--linter': String, // Install Linter
        '--testing': String, // Install Testing
        '--events': Boolean, // Events Resource
        '--port': Number, // Port App

        // Aliases
        '-n': '--name',
        '-c': '--controller',
        '-m': '--model',
        '-r': '--route',
        '-t': '--test',
        '-g': '--git',
        '-y': '--yes',
        '-i': '--install',
      },
      {
        // Get CLI Arguments
        argv: options.slice(2),
      }
    )

    // Return CLI Arguments
    return {
      name: args['--name'],
      command: args._[0],
      subcommand: args._[1],
    }
  } catch (error) {
    if (error.code === 'ARG_UNKNOWN_OPTION') {
      console.info('Undefined Argument')
    }

    throw new Error(error)
  }
}

async function setArgs (options, questionsArray) {
  const answers = await inquirer.prompt(questions(options, questionsArray))

  return {
    ...options,
    ...answers,
  }
}

async function setValidArgs (args) {
  return args
}

module.exports = {
  getArgs,
  setArgs,
  setValidArgs,
}
