const express = require('express')
const aboutme = require('../helpers/aboutme')
const router = express.Router()
const { UniqueViolationError } = require('objection')

router.get('/', async (req, res) => {
  const name = req.query.name
  const result = name ? await aboutme.getAboutByName(name) : await aboutme.getAllAbout()
  res.status(200).json(result)
})

router.get('/:id', async (req, res) => {
  const result = await aboutme.getAboutById(req.params.id)
  /*console.log(result.name)
  console.log(result.description)*/
  res.status(200).json(result)

})

router.post('/', async (req, res) => {
  const result = await aboutme.addAbout (req.body)

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
  const response = await aboutme.deleteAbout(req.params.id)
  res.json(response)
})

module.exports = router