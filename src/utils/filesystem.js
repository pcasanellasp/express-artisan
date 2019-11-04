const fs = require('fs')
const ejs = require('ejs')
const util = require('util')

module.exports = {
  createFile,
  createCustomFile,
  createCustomFileWithFolder,
}

function getTemplate (folder, template, options) {
  const templatePath = `${global.appRootPath}/templates/${folder}/${template}.ejs`
  const contents = fs.readFileSync(templatePath, 'utf-8')

  function render () {
    return ejs.render(contents, options, {
      escape: util.inspect,
    })
  }

  return {
    locals: options,
    render: render,
  }
}

function createFile (folder, template, args, ext = '.js', prefix = '') {
  // Create folder if not exist
  if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder, { recursive: true })
  }

  const file = `./${folder}/${args.name}${prefix}${ext}`
  const content = getTemplate(folder, template, args).render()
  if (!fs.existsSync(file)) {
    fs.writeFileSync(file, content)
    console.info('   \x1b[36mcreate\x1b[0m : ' + file)
  } else {
    throw new Error('File Already Exists')
  }
}

function createCustomFileWithFolder (folder, template, args, ext = '.js', prefix = '') {
  // Create folder if not exist
  if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder, { recursive: true })
  }

  const file = `./${folder}/${template}${prefix}${ext}`
  const content = getTemplate(folder, template, args).render()
  if (!fs.existsSync(file)) {
    fs.writeFileSync(file, content)
    console.info('   \x1b[36mcreate\x1b[0m : ' + file)
  } else {
    throw new Error('File Already Exists')
  }
}

function createCustomFile (folder, template, args, ext = '.js', prefix = '') {
  const file = `./${template}${prefix}${ext}`
  const content = getTemplate(folder, template, args).render()
  if (!fs.existsSync(file)) {
    fs.writeFileSync(file, content)
    console.info('   \x1b[36mcreate\x1b[0m : ' + file)
  } else {
    throw new Error('File Already Exists')
  }
}
