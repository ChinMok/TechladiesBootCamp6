
const { tableName } = require('../src/models/aboutme')

const SEED_ABOUTME = [
  {
    name: 'Mok Sau Chin',
    description: 'When I chance upon the Techladies Bootcamp, I saw an opportunity to continue my learning journey in coding. I am quite hesitantly initially whether I am able to learn more challenging stuff. Well, I thought to myself, I am able to complete the technical task I will give it a try.I also see an opportunity to do good - to create products for different NGOs',
  },
  {
    name: 'Alice Tan',
    description: 'I want to learn how to code from the industry experts'

  },
  {
    name: 'Margaret Lee',
    description: 'I want to go to another industry'

  }
  
]

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex(tableName)
  .del()
  .then(function () {
    // Inserts seed entries
    return knex(tableName).insert(SEED_ABOUTME)
  })
};
