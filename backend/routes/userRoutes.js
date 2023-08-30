const express = require('express')
const router = express.Router()
const usersController = require('../controllers/usersController')
const verifyJWT = require('../middleware/verifyJWT')

router.route('/').post(usersController.createNewUser) // the only public route

router.use(verifyJWT)

router.route('/')
    .get(usersController.getUsers)
    .patch(usersController.updateUser)
    .delete(usersController.deleteUser)

module.exports = router
