const Sequelize = require('sequelize')
const setupDatabase = require('./../lib/db')

module.exports = function setupAreaModel (config) {
  const sequelize = setupDatabase(config)

  return sequelize.define('area', {
    code: {
      type: Sequelize.INTEGER,
      allowNull: false,
      unique: true,
      validate: {
        isInt: true
      }
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    }
  }, {
    paranoid: true
  })
}
