const Sequelize = require('sequelize')
const setupDatabase = require('./../lib/db')

module.exports = function setupPhoneTypeModel (config) {
  const sequelize = setupDatabase(config)

  return sequelize.define('phoneType', {
    type: {
      type: Sequelize.STRING,
      allowNull: false
    }
  })
}
