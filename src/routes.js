const express = require('express');
const router = express.Router();

const UsersController = require('./controllers/UsersController')
const AuthController = require('./controllers/AuthController')

router.post('/users.create', UsersController.createUser)
router.post('/login', AuthController.login)

module.exports = router;