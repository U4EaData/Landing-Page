const express = require('express')
const router = express.Router()
const entriesController = require('../controllers/entriesController')
const verifyJWT = require('../middleware/verifyJWT')

router.use(verifyJWT)
router.route('/')
    .get(entriesController.getEntries)
    .post(entriesController.createNewEntry)
    .delete(entriesController.deleteEntry)

module.exports = router