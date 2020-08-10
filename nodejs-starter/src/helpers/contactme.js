const db = require('../models/contactme')

exports.getAllContact = async function() {
  const ContactMe = await db.Contact_Me.query().select()
  return ContactMe
}

exports.getContactById = async function(id) {
  const ContactById = await db.Contact_Me.query().select().where('id', id)
  return ContactById[0] || 'Not found'
}

exports.getContactByName = async function(name) {
  const ContactByName = await db.Contact_Me.query().select().where('name', name)
  return ContactByName
}

exports.addContact = async function(contact) {
  try {
    const response = await db.Contact_Me.query().insert(contact)
    return response
  } catch(err) {
    return { err }
  }
}

exports.deleteContact = async function(id) {
  const response = await db.Contact_Me.query().where('id', id).del()
  return response
}