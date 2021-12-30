const connection = require('../database/connection')
const bcrypt = require('bcryptjs')

module.exports = {
    async login (req, res){
        const {email, password} = req.body

        const login = await connection.users.findOne({where: {email: email}});

        if(login){
            bcrypt.compare(password, login.password, (err, sucess) => {
                if(sucess){
                    res.statusCode = 200
                    res.send({
                        id: login.id,
                        name: login.name,
                        email: login.email,
                    });
                }else{
                    res.statusCode = 400
                    res.json({
                        message: "Senha inválida",
                        status: 400
                    });
                }
            })
        }else{
            res.statusCode = 400
            res.json({
                message: "Usuário inválido",
                status: 400
            });
        }
    }
}