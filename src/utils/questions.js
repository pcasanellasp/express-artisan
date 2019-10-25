module.exports = (options, q) => {
  // Defaults

  const questions = []

  // Global
  if (!options.name && q.includes('name')) {
    questions.push({
      type: 'input',
      name: 'name',
      message: 'Resource name: ',
    })
  }

  if (!options.subcommand && q.includes('subcommand')) {
    questions.push({
      type: 'list',
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
      type: 'list',
      name: 'db',
      message: 'Database Engine: ',
      choices: ['None', 'mongoose', 'sequelize'],
      default: 'None',
    })
  }

  if (!options.api && q.includes('api')) {
    questions.push({
      type: 'list',
      name: 'api',
      message: 'API Engine: ',
      choices: ['None', 'API REST', 'Graphql'],
      default: 'None',
    })
  }

  if (!options.view && q.includes('view')) {
    questions.push({
      type: 'list',
      name: 'view',
      message: 'View Engine: ',
      choices: ['None', 'ejs', 'hbs', 'plain'],
      default: 'None',
    })
  }

  if (!options.linter && q.includes('linter')) {
    questions.push({
      type: 'list',
      name: 'linter',
      message: 'Linter: ',
      choices: ['None', 'eslint'],
      default: 'None',
    })
  }

  if (!options.testing && q.includes('testing')) {
    questions.push({
      type: 'list',
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

  return questions
}
