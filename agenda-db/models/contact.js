const Sequelize = require('sequelize')
const setupDatabase = require('./../lib/db')

module.exports = function setupContactModel (config) {
  const sequelize = setupDatabase(config)

  return sequelize.define('contact', {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    }
  }, {
    paranoid: true
  })
}
