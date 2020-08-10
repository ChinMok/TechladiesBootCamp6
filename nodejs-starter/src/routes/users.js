const express = require('express')
const router = express.Router()
const debug = require('debug')('app:users')
const db = require('../models/index')
const user = require('../helpers/user')
router.use(express.json());

/* GET users listing. */
router.get('/', async(req, res) => {
  debug('Hello World!')

  const users = await db.User.query().select('email', 'firstName', 'lastName')
  console.log(users)
  res.json(users)
})

router.post('/login', async (req, res) => {
  const result = await req.body
  const email = result.email
  const passwd = result.passwordHash
  /*console.log(result.email)
  console.log(result.passwordHash)*/
  const email_get = await user.getUserByEmail (email)
  res.status(200).json(email_get) 
    try{
      /*console.log(email_get)
      console.log(email_get.passwordHash)*/
      if (email_get.passwordHash == passwd){
        console.log("Login Success")
      }
      else if (email_get=="Not found"){
        console.log("User Not Found")
      }
      else{
        console.log ("Login Unsuccessful")
      }


    }catch(err){
      return{ err }
    }
  
  

}) 

module.exports = router
