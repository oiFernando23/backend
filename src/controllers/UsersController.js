const connection = require('../database/connection')
const bcrypt = require('bcryptjs');
const { posts } = require('../database/connection');

module.exports = {

        async searchUser(req, res){
            try{
                const x = req.params.username
                const userSearched = await connection.users.findOne({where: {email: x}});
                res.send(userSearched.id)
            }catch(err){
                console.log(err)
            }
        },

        async rateUser(req, res){
            const y = req.params.id
            try{
                const user = await connection.users.findOne({where: {id: y}}); 
                console.log(user)
                const newRate = req.body.rate
                const addRate = (user.rate + parseInt(newRate)) / 2
                user.rate = addRate
                user.cont = user.cont+1
                user.save();
                res.send(user)
            }catch(err){
                console.log(err)
            }
        },

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
                    estado: estado,
                    rate: 0,
                    cont: 0
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