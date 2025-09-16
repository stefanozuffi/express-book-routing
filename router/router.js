const express = require('express')
const router = express.Router()
const bookController = require('../controllers/bookController.js')

router.get('/', bookController.index)

router.get('/:id', bookController.show)

router.post('/', bookController.store)

router.put('/:id', bookController.update)

router.patch('/:id', bookController.modify)

router.delete('/:id', bookController.destroy)

module.exports = router