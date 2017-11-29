const setupDatabase = require('./lib/db')
// setup Models
const setupAreaModel = require('./models/area')
const setupPhoneTypeModel = require('./models/phoneType')
const setupPhoneModel = require('./models/phone')
const setupContactPhoneModel = require('./models/phoneContact')
const setupEmailModel = require('./models/email')
const setupContactModel = require('./models/contact')
const setupRegistryModel = require('./models/registry')

// Services
const setupRegistry = require('./lib/registry')

module.exports = async function (config) {
  const sequelize = setupDatabase(config)

  const areaModel = setupAreaModel(config)
  const phoneTypeModel = setupPhoneTypeModel(config)
  const phoneModel = setupPhoneModel(config)
  const phoneContactModel = setupContactPhoneModel(config)
  const emailModel = setupEmailModel(config)
  const contactModel = setupContactModel(config)
  const registryModel = setupRegistryModel(config)

  areaModel.hasMany(phoneModel)
  phoneTypeModel.hasMany(phoneModel)
  phoneModel.belongsTo(areaModel)
  phoneModel.belongsTo(phoneTypeModel)

  areaModel.hasMany(phoneContactModel)
  phoneTypeModel.hasMany(phoneContactModel)
  phoneContactModel.belongsTo(areaModel)
  phoneContactModel.belongsTo(phoneTypeModel)

  contactModel.hasMany(emailModel)
  emailModel.belongsTo(contactModel)

  contactModel.hasMany(phoneContactModel)
  phoneContactModel.belongsTo(contactModel)

  registryModel.hasMany(phoneModel)
  registryModel.hasMany(contactModel)
  contactModel.belongsTo(registryModel)
  phoneModel.belongsTo(registryModel)

  await sequelize.authenticate()

  if (config.setup) {
    await sequelize.sync({ force: true })
  }

  const Registries = setupRegistry(registryModel, contactModel, phoneModel, phoneContactModel, emailModel, areaModel, phoneTypeModel)
  return {
    Registries
  }
}
