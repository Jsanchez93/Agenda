const Sequelize = require('sequelize')
const setupDatabase = require('./../lib/db')

module.exports = function setupPhoneContactModel (config) {
  const sequelize = setupDatabase(config)

  return sequelize.define('phoneContact', {
    number: {
      type: Sequelize.STRING,
      allowNull: false
    }
  })
}
