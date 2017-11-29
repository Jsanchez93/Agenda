module.exports = function setupRegistry (registryModel, contactModel, phoneModel, phoneContactModel, emailModel, areaModel, phoneTypeModel) {
  async function findAll () {
    return registryModel.findAll({
      attributes: [ 'id', 'name', 'iva', 'nit', 'giro' ],
      include: [{
        attributes: [ 'id', 'name' ],
        model: contactModel,
        as: 'contacts',
        include: [{
          attributes: [ 'email' ],
          model: emailModel,
          as: 'emails'
        }]
      }],
      raw: true
    })
  }

  async function create (registry) {
    const result = await registryModel.create(registry)
    return result.toJSON()
  }

  return {
    findAll,
    create
  }
}
