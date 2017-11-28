const Sequelize = require('sequelize')
const setupDatabase = require('./../lib/db')

module.exports = function setupEmailModel (config) {
  const sequelize = setupDatabase(config)

  return sequelize.define('email', {
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }   
    }
  })
}
