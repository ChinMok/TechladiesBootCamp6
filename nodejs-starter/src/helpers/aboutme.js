const db = require('../models/aboutme')

exports.getAllAbout = async function() {
  const AboutMe = await db.About_Me.query().select()
  return AboutMe
}

exports.getAboutById = async function(id) {
  const AboutById = await db.About_Me.query().select().where('id', id)
  return AboutById[0] || 'Not found'
}

exports.getAboutByName = async function(name) {
  const AboutByName = await db.About_Me.query().select().where('name', name)
  return AboutByName
}

exports.addAbout = async function(about) {
  try {
    const response = await db.About_Me.query().insert(about)
    return response
  } catch(err) {
    return { err }
  }
}

exports.deleteAbout = async function(id) {
  const response = await db.About_Me.query().where('id', id).del()
  return response
}