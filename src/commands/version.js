const { version } = require('../../package.json')

module.exports = (args) => {
  console.info(`v${version}`)
}
