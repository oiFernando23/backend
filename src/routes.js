const express = require('express');
const router = express.Router();
const multer = require('multer');
const multerConfig = require('./config/multer');

const UsersController = require('./controllers/UsersController');
const AuthController = require('./controllers/AuthController');
const PostController = require('./controllers/PostController');

//login
router.post('/login', AuthController.login)

//users
router.post('/users.create', UsersController.createUser)


//posts
router.get('/posts.list', PostController.index)
// router.post('/posts.create', PostController.newPost)
router.post('/posts.create', multer(multerConfig).single('file'), (req, res) => {
    PostController.newPost(req, res)
})

router.get('/users.list/:id', UsersController.listUser)

router.delete('/posts.delete/:id', PostController.deletePost)

module.exports = router;