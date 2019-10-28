const fs = require('fs')
const ejs = require('ejs')
const util = require('util')

module.exports = {
  compileFile,
}

function compileFile (template, args, folder, ext = 'js') {
  const templateRender = getTemplate(template, args).render()
  const fileName = `${args.name}.${ext}`
  createFile(folder, fileName)
  writeFile(`${folder}/${fileName}`, templateRender)
}

function createFile (folder, name) {
  const filePath = `./${folder}/${name}`

  if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder, { recursive: true })
  }

  if (!fs.existsSync(filePath)) {
    fs.appendFile(filePath, '', function (err) {
      if (err) throw err
    })
  } else {
    throw new Error('File Already Exists')
  }
}

function writeFile (file, content) {
  fs.writeFileSync(file, content)
  console.info('   \x1b[36mcreate\x1b[0m : ' + file)
}

function getTemplate (template, options) {
  const templatePath = `${global.appRootPath}/templates/${template}.ejs`
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

/* function copyTemplate (from, to) {
  write(to, fs.readFileSync(path.join(TEMPLATE_DIR, from), 'utf-8'))
}

function copyTemplateMulti (fromDir, toDir, nameGlob) {
  fs.readdirSync(path.join(TEMPLATE_DIR, fromDir))
    .filter(minimatch.filter(nameGlob, { matchBase: true }))
    .forEach(function (name) {
      copyTemplate(path.join(fromDir, name), path.join(toDir, name))
    })
}

function loadTemplate (name) {
  var contents = fs.readFileSync(path.join(__dirname, '..', 'templates', (name + '.ejs')), 'utf-8')
  var locals = Object.create(null)

  function render () {
    return ejs.render(contents, locals, {
      escape: util.inspect,
    })
  }

  return {
    locals: locals,
    render: render,
  }
}

function write (file, str, mode) {
  fs.writeFileSync(file, str, { mode: mode || MODE_0666 })
  console.info('   \x1b[36mcreate\x1b[0m : ' + file)
} */
