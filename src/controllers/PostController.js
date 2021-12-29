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
        var url = ""

        if(req.file){
            url = req.file.location
        }
        
        try{
            const {description, value, userId} = req.body
            const post = await connection.posts.create(
                {
                    description: description,
                    image: url,
                    userId: userId,
                    value: value
                }
            )
            res.json(post)
        } catch(error){
            res.status(500).send(new Error(error))
        }
    }
}