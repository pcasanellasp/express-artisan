const { setArgs } = require('../utils/args')
const fs = require('../utils/filesystem')

module.exports = async (options) => {
  try {
    // Check if subcommand is set
    if (!options.subcommand) {
      options = await setArgs(options, ['subcommand'])
    }

    let args
    let folder = 'src'

    const template = options.subcommand

    switch (options.subcommand) {
      case 'model':
        args = await setArgs(options, ['name', 'controller', 'route'])
        folder = 'models'
        break

      case 'route':
        args = await setArgs(options, ['name', 'controller', 'model'])
        folder = 'routes'
        break

      case 'controller':
        args = await setArgs(options, ['name', 'model', 'route'])
        folder = 'controllers'
        break

      default:
        throw new Error('Please specifify valid make resource. Valid values: model, route, controller, test')
    }

    // Run Make Program
    fs.compileFile(template, args, folder)

    if (args.controller) {
      fs.compileFile('controller', args, 'controllers')
    }

    if (args.model) {
      fs.compileFile('model', args, 'models')
    }

    if (args.route) {
      fs.compileFile('route', args, 'routes')
    }
  } catch (error) {
    console.info(error.message)
    console.info('Abort!')
  }
}
