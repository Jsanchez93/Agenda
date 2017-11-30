# Usage
const db = require('agenda-db')

async function run () {
  const config = {
    database: DB_NAME,
    username: DB_USER,
    password: DB_PASS,
    host: DB_HOST,
    dialect: 'db engine',
    setup: false 
  }

  const { Registries } = await db(config).catch(handleFatalError)  
}

# Windows command setup
"setup": "SET DEBUG=agenda:* && node setup.js"