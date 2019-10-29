const menus = {
  main: `
      command [command] <args>
      ---------------------------------------
      create ............. create new project
      make ............... create resource
      version ............ show package version
      help ............... show help menu for a command`,

  create: `
      xartisan create <args>
      --location, -l ..... the location to use`,
}

module.exports = async (options) => {
  // await setValidArgs(validArgs)

  const subCmd = options.command === 'help'
    ? options.subcommand
    : options.command

  console.info(menus[subCmd] || menus.main)
}
