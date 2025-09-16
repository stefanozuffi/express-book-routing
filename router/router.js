const express = require('express')
const router = express.Router()
const bookController = require('../controllers/bookController.js')

router.get('/', bookController.index)

router.get('/:id', bookController.show)

router.post('/', bookController.store)

module.exports = router