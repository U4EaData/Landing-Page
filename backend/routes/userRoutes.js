const express = require('express')
const router = express.Router()
const usersController = require('../controllers/usersController')
const verifyJWT = require('../middleware/verifyJWT')

// This route is public
router.route('/').post(usersController.createNewUser)

// Use verifyJWT middleware for the rest of the routes
router.use(verifyJWT)

// These routes are private and will require a valid JWT token
router.route('/')
    .get(usersController.getUsers)
    .patch(usersController.updateUser)
    .delete(usersController.deleteUser)

module.exports = router
