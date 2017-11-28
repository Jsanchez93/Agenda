const Sequelize = require('sequelize')
const setupDatabase = require('./../lib/db')

module.exports = function setupRegistryModel (config) {
  const sequelize = setupDatabase(config)

  return sequelize.define('registry', {
    name: {
      type: Sequelize.STRING,
      allowNull: false      
    },
    iva: {
      type: Sequelize.STRING,
      allowNull: false      
    },
    nit: {
      type: Sequelize.STRING,
      allowNull: false      
    },
    giro: {
      type: Sequelize.STRING,
      allowNull: false      
    }
  })
}
