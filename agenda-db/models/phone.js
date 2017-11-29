const Sequelize = require('sequelize')
const setupDatabase = require('./../lib/db')

module.exports = function setupPhoneModel (config) {
  const sequelize = setupDatabase(config)

  return sequelize.define('phone', {
    number: {
      type: Sequelize.STRING,
      allowNull: false
    }
  }, {
    paranoid: true
  })
}
