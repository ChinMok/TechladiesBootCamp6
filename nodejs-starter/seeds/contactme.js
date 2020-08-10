
const { tableName } = require('../src/models/contactme')

const SEED_CONTACTME = [
  {
    name: 'Mok Sau Chin',
    contact: ' mokscmok@hotmail.com'
  }
  
    
  
]

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex(tableName)
  .del()
  .then(function () {
    // Inserts seed entries
    return knex(tableName).insert(SEED_CONTACTME)
  })
};
