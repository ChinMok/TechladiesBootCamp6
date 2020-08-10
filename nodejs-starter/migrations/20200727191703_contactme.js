const { tableName } = require('../src/models/contactme')

exports.up = (knex) => {
  return knex.schema.createTable(tableName, (table) => {
    table.increments('id').primary()
    table.string('name').notNullable()
    table.text('contact').notNullable().unique()
    table.timestamps(true, true)
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable(tableName)
}
