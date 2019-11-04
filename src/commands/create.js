const { setArgs } = require('../utils/args')
const { createCustomFile, createCustomFileWithFolder } = require('../utils/filesystem')

module.exports = async (options) => {
  try {
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

    createCustomFile('app', 'app', options)
    createCustomFile('app', '.env', options, '')
    createCustomFile('app', 'package', options, '.json')
    createCustomFileWithFolder('bin', 'server', options)
    createCustomFileWithFolder('config', 'database', options)

    // console.info(options)
  } catch (error) {
    console.info(error)
  }
}
