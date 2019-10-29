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
    const ext = 'js'
    const prefix = ''
    let capitalize = false
    const template = options.subcommand

    switch (options.subcommand) {
      case 'model':
        args = await setArgs(options, ['name', 'controller', 'route'])
        folder = 'models'
        capitalize = true
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
    fs.createFile(folder, template, args, ext, prefix, capitalize)

    if (args.controller) {
      fs.createFile('controllers', 'controller', args, 'js', 'Controller', false)
    }

    if (args.model) {
      fs.createFile('models', 'model', args, 'js', '', true)
    }

    if (args.route) {
      fs.createFile('routes', 'route', args, 'js', 'Router', false)
    }
  } catch (error) {
    console.info(error.message)
    console.info('Abort!')
  }
}
