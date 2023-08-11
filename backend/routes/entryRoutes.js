const express = require('express')
const router = express.Router()
const entriesController = require('../controllers/entriesController')

router.route('/')
    .get(entriesController.getEntries)
    .post(entriesController.createNewEntry)
    .delete(entriesController.deleteEntry)

module.exports = router