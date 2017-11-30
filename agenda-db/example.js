const db = require('./')
const chalk = require('chalk');

async function run () {
  const config = {
    database: process.env.DB_NAME || 'agenda',
    username: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASS || '1234asdf0', // Random pass
    host: process.env.DB_HOST || 'localhost',
    dialect: 'postgres',
    setup: false
  }

  const { Registries } = await db(config).catch(handleFatalError)

  const registro = await Registries.getPhonesContact(1).catch(handleFatalError)

  console.log(registro)
}

function handleFatalError (err) {
  console.error(`${chalk.red('[Fatal error]')} ${err.message}`)
  console.error(err.stack)
  process.exit(1)
}

run()
