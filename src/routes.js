const express = require('express');
const router = express.Router();

const UsersController = require('./controllers/UsersController');
const AuthController = require('./controllers/AuthController');
const PostController = require('./controllers/PostController');

router.post('/users.create', UsersController.createUser)
router.post('/login', AuthController.login)
router.post('/newPost', PostController.newPost)
router.get('/posts', PostController.index)

module.exports = router;