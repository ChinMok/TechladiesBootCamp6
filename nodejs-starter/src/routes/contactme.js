const express = require('express')
const contactme = require('../helpers/contactme')
const router = express.Router()
const { UniqueViolationError } = require('objection')

router.get('/', async (req, res) => {
  const name = req.query.name
  const result = name ? await contactme.getContactByName(name) : await contactme.getAllContact()
  res.status(200).json(result)
})

router.get('/:id', async (req, res) => {
  const result = await contactme.getContactById(req.params.id)
  res.status(200).json(result)
})

router.post('/', async (req, res) => {
  const result = await contactme.addContact (req.body)

  // handle error
  if (result.err) {
    const err = result.err
    if (err instanceof UniqueViolationError) {
      res.status(409).send({
        message: err.message,
        type: 'UniqueViolation',
        data: {
          columns: err.columns,
          table: err.table,
          constraint: err.constraint
        }
      })
    } else {
      res.status(500).send({
        message: err.message,
        type: 'UnknownError',
        data: {}
      });
    }

    return
  }


  res.status(200).json(result)
})

router.delete('/:id', async (req, res) => {
  const response = await contactme.deleteContact(req.params.id)
  res.json(response)
})

module.exports = router