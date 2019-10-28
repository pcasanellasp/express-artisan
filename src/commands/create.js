const { setArgs } = require('../utils/args')

module.exports = async (options) => {
  options = await setArgs(options, [
    'name',
    'git',
    'install',
    'db',
    'api',
    'view',
    'auth',
    'cors',
    'linter',
    'testing',
    'events',
    'port',
    'endpoint',
  ])

  console.info(options)
}
