const setupDatabase = require('./lib/db')
const setupArea = require('./models/area')
const setupPhoneType = require('./models/phoneType')
const setupPhone = require('./models/phone')
const setupContactPhone = require('./models/phoneContact')
const setupEmail = require('./models/email')
const setupContact = require('./models/contact')
const setupRegistry = require('./models/registry')

module.exports = async function (config) {
  const sequelize = setupDatabase(config)
  const areaModel = setupArea(config)
  const phoneTypeModel = setupPhoneType(config)
  const phoneModel = setupPhone(config)
  const phoneContactModel = setupContactPhone(config)
  const emailModel = setupEmail(config)
  const ContactModel = setupContact(config)
  const RegistryModel = setupRegistry(config)

  areaModel.hasMany(phoneModel)
  phoneTypeModel.hasMany(phoneModel)  
  phoneModel.belongsTo(areaModel)
  phoneModel.belongsTo(phoneTypeModel)


  areaModel.hasMany(phoneContactModel)
  phoneTypeModel.hasMany(phoneContactModel)
  phoneContactModel.belongsTo(areaModel)
  phoneContactModel.belongsTo(phoneTypeModel)

  ContactModel.hasMany(emailModel)
  emailModel.belongsTo(ContactModel)

  ContactModel.hasMany(phoneContactModel)
  phoneContactModel.belongsTo(ContactModel)

  RegistryModel.hasMany(phoneModel)
  RegistryModel.hasMany(ContactModel)
  ContactModel.belongsTo(RegistryModel)
  phoneModel.belongsTo(RegistryModel)

  await sequelize.authenticate()

  if (config.setup) {
    await sequelize.sync({ force: true })
  }

  const Phone = {}
  return {
    Phone
  }
}
