'use strict'

const { Model } = require('objection')
const tableName = 'ContactMe'

class Contact_Me extends Model {
  static get tableName () {
    return tableName
  }

  static get jsonSchema () {
    return {
      type: 'object',
      required: ['name'],
      properties: {
        id: { type: 'integer' },
        name: { type: 'string' },
        contact: { type: 'string'}
      }
    }
  }
}

module.exports = {
  Contact_Me,
  model: Contact_Me,
  tableName
}
