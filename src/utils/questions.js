const { prompt } = require('enquirer')

module.exports = async (options, q) => {
  // Defaults

  const questions = []

  // Global
  if (!options.name && q.includes('name')) {
    questions.push({
      type: 'input',
      name: 'name',
      message: 'Name: ',
    })
  }

  if (!options.subcommand && q.includes('subcommand')) {
    questions.push({
      type: 'select',
      name: 'subcommand',
      message: 'What type of resource:  ',
      choices: ['model', 'route', 'controller', 'test', 'mail'],
      default: 'model',
    })
  }

  // Make
  if (!options.controller && q.includes('controller')) {
    questions.push({
      type: 'confirm',
      name: 'controller',
      message: 'With controller? ',
      default: false,
    })
  }

  if (!options.model && q.includes('model')) {
    questions.push({
      type: 'confirm',
      name: 'model',
      message: 'With model? ',
      default: false,
    })
  }

  if (!options.route && q.includes('route')) {
    questions.push({
      type: 'confirm',
      name: 'route',
      message: 'With route? ',
      default: false,
    })
  }

  if (!options.test && q.includes('test')) {
    questions.push({
      type: 'confirm',
      name: 'test',
      message: 'With test? ',
      default: false,
    })
  }
  // Create

  /*
    'cors': Boolean
    'testing': String
    'events': Boolean
    'port': Number
  */

  if (!options.db && q.includes('db')) {
    questions.push({
      type: 'select',
      name: 'db',
      message: 'Database Engine: ',
      choices: ['None', 'mongoose', 'sequelize'],
      default: 'None',
    })
  }

  if (!options.api && q.includes('api')) {
    questions.push({
      type: 'select',
      name: 'api',
      message: 'API Engine: ',
      choices: ['None', 'API REST', 'Graphql'],
      default: 'None',
    })
  }

  if (!options.endpoint && q.includes('endpoint')) {
    questions.push({
      type: 'input',
      name: 'endpoint',
      message: 'Base path: (empty)',
    })
  }

  if (!options.port && q.includes('port')) {
    questions.push({
      type: 'numeral',
      name: 'port',
      message: 'Port: ',
      default: '8080',
    })
  }

  if (!options.view && q.includes('view')) {
    questions.push({
      type: 'select',
      name: 'view',
      message: 'View Engine: ',
      choices: [
        { name: 'None', value: 'none' },
        { name: 'ejs', value: 'ejs' },
        { name: 'hbs', value: 'ejs' },
        { name: 'plain', value: 'plain' },
      ],
      default: 'None',
    })
  }

  if (!options.linter && q.includes('linter')) {
    questions.push({
      type: 'select',
      name: 'linter',
      message: 'Linter: ',
      choices: ['None', 'eslint'],
      default: 'None',
    })
  }

  if (!options.testing && q.includes('testing')) {
    questions.push({
      type: 'select',
      name: 'testing',
      message: 'Testing Engine: ',
      choices: ['None', 'Mocha + Chai', 'jest'],
      default: 'None',
    })
  }

  if (!options.auth && q.includes('auth')) {
    questions.push({
      type: 'confirm',
      name: 'auth',
      message: 'Create auth component? ',
      default: false,
    })
  }

  if (!options.git && q.includes('git')) {
    questions.push({
      type: 'confirm',
      name: 'git',
      message: 'Initialize a git repository? ',
      default: false,
    })
  }

  if (!options.install && q.includes('install')) {
    questions.push({
      type: 'confirm',
      name: 'install',
      message: 'Run npm install? ',
      default: false,
    })
  }

  return prompt(questions)
}
