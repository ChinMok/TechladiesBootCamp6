const db = require('../models/user')

exports.getAllUser = async function() {
  const user = await db.User.query().select()
  return user
}

exports.getUserByEmail = async function(email) {
  const UserByEmail = await db.User.query().select().where('email', email)
  return UserByEmail[0] || 'Not found'
}

exports.getUserByfirstName = async function(firstName) {
  const UserByfirstName = await db.User.query().select().where('firstName', firstName)
  return UserByfirstName
}

exports.addUser = async function(user) {
  try {
    const response = await db.User.query().insert(user)
    return response
  } catch(err) {
    return { err }
  }
}

exports.deleteUser = async function(id) {
  const response = await db.User.query().where('id', id).del()
  return response
}