const connection = require('../database/connection')
const bcrypt = require('bcryptjs')

module.exports = {
    async index(req, res){
        try{
            const posts = await connection.posts.findAll();
            res.json(posts);
        }catch(error){
            console.log('erro');
        }
    },
    async newPost(req, res){
        try{
            const {description, image, value, userId} = req.body
            const post = await connection.posts.create(
                {
                    description: description,
                    image: image,
                    userId: userId,
                    value: value
                }
            )
            res.json(post)
        } catch(error){
            res.send("Erro")
            console.log(error)
        }
    }
}