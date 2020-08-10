'use strict'

const { Model } = require('objection')
const tableName = 'AboutMe'

class About_Me extends Model {
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
        description: { type: 'string'}
      }
    }
  }
}

module.exports = {
  About_Me,
  model: About_Me,
  tableName
}
