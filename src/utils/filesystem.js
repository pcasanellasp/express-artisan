const fs = require('fs')
const ejs = require('ejs')
const util = require('util')

module.exports = {
  createFile,
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

function createFile (folder, template, args, ext = 'js', prefix = '', capital = false) {
  // Capitalize Name File
  console.info(args)
  if (capital === true) {
    args.name = capitalize(args.name)
  }

  // Create folder if not exist
  if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder, { recursive: true })
  }

  const file = `./${folder}/${args.name}${prefix}.${ext}`
  const content = getTemplate(folder, template, args).render()
  if (!fs.existsSync(file)) {
    fs.writeFileSync(file, content)
    args.name = args.name.toLowerCase()
    console.info('   \x1b[36mcreate\x1b[0m : ' + file)
  } else {
    throw new Error('File Already Exists')
  }
}

function capitalize (string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
