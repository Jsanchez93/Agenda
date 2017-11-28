const debug = require('debug')('agenda:db:setup')
const chalk = require('chalk')
const db = require('./')

async function setup () {

  const config = {
    database: process.env.DB_NAME || 'agenda',
    username: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASS || '1234asdf0',
    host: process.env.DB_HOST || 'localhost',
    dialect: 'postgres',
    logging: s => debug(s),
    setup: true
  }

  await db(config).catch(handleFatalError)

  console.log('Success!')
  process.exit(0)
}

function handleFatalError (err) {
  console.error(`${chalk.red('[fatal error]')} ${err.message}`)
  console.error(err.stack)
  process.exit(1)
}

setup()
