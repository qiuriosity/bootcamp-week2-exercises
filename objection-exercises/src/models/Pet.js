// Write your Pet model here!
const BaseModel = require('./BaseModel')

class Pet extends BaseModel {
  static get tableName() {
    return 'pets'
  }

  static get virtualAttributes() {
    return ['isDog']
  }

  get isDog() {
    return this.type === 'DOG'
  }

  static get relationMappings() {
    return {}
  }
}

module.exports = Pet
