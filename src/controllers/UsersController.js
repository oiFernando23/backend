const connection = require('../database/connection')
const bcrypt = require('bcryptjs');

module.exports = {
    async createUser(req, res){
        try{
            const {name, email, password, phone} = req.body
            const user = await connection.users.create(
                {
                    name: name,
                    email: email,
                    phone: phone,
                    password: bcrypt.hashSync(password, 10)
                }
            )
            res.json(user)
        } catch(error){
            res.send("Erro")
            console.log(error)
        }
    },
}