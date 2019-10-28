'use strict'

global.appRootPath = require('path').resolve(__dirname)
const { getArgs } = require('./utils/args')

module.exports = async (args) => {
  try {
    const options = getArgs(args)
    const cmd = options.command || 'help'

    switch (cmd) {
      case 'version':
        require('./commands/version')(options)
        break

      case 'about':
        require('./commands/about')()
        break

      case 'help':
        require('./commands/help')(options)
        break

      case 'create':
        require('./commands/create')(options)
        break

      case 'make':
        require('./commands/make')(options)
        break

      default:
        console.info('error')
        break
    }
  } catch (error) {
    console.info(error.message)
    console.info('Abort!')
  }
}
