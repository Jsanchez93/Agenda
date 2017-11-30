module.exports = function setupRegistry (registryModel, contactModel, phoneModel, phoneContactModel, emailModel, areaModel, phoneTypeModel) {
  async function findAll () {
    return registryModel.findAll({
      attributes: [ 'id', 'name', 'iva', 'nit', 'giro' ],      
      raw: true
    })
  }

  async function getPhones (registryId) {
    return phoneModel.findAll({
      attributes: [ 'id', 'number' ],
      where: {
        registryId
      },
      include: [{
        attributes: [ 'code', 'name' ],
        model: areaModel,
        as: 'area'
      }],
      raw: true
    })
  }

  async function getPhonesContact (contactId) {
    return phoneContactModel.findAll({
      attributes: [ 'id', 'number' ],
      where: {
        contactId
      },
      include: [{
        attributes: [ 'code', 'name' ],
        model: areaModel,
        as: 'area'
      }],
      raw: true
    })
  }

  async function getContacts (registryId) {
    return contactModel.findAll({
      attributes: [ 'id', 'name' ],
      where: {
        registryId
      },
      raw: true
    })
  }

  async function getContactsEmails (contactId) {
    return emailModel.findAll({
      attributes: [ 'id', 'email' ],
      where: {
        contactId
      },
      raw: true
    })
  }

  async function create (registry) {
    const result = await registryModel.create(registry)
    return result.toJSON()
  }

  return {
    findAll,
    getPhones,
    getPhonesContact,
    getContacts,
    getContactsEmails,
    create
  }
}
