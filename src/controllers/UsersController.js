const connection = require('../database/connection')
const bcrypt = require('bcryptjs');
const { posts } = require('../database/connection');

module.exports = {
    async createUser(req, res){
        try{
            const {name, email, password, phone, cidade, estado} = req.body
            const user = await connection.users.create(
                {
                    name: name,
                    email: email,
                    phone: phone,
                    password: bcrypt.hashSync(password, 10),
                    cidade: cidade,
                    estado: estado
                }
            )
            res.json(user)
        } catch(error){
            res.send("Erro")
            console.log(error)
        }
    },
    async listUser(req, res){
        const id = req.params.id
        try{
            const allPost = await connection.users.findOne({
                include: [{
                  model: connection.posts,
                  where: {userId: id}
                 }]
              })
              if(allPost == null){
                  const noPost = await connection.users.findOne({where: {id: id}});
                  res.json(noPost)
              }else{
                res.json(allPost)
              }
        }catch(error){
            console.log('erro');
        }
    }
}