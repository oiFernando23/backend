const { Sequelize } = require('sequelize');

//database', 'username', 'password'
const sequelize = new Sequelize('d93gdakedvror9', 'bknhdqauhxszet', '6c9c0467498c768e58a8a9297912e4d6c1e9e7733d1e26fa1d1e71d4be4a01ba', {
    host: 'ec2-54-83-152-251.compute-1.amazonaws.com',
    dialect: 'postgres',
    dialectOptions:{
        ssl:{
            require:true,
            rejectUnauthorized: false
        }
    }
});

const db = {}; 

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require('./models/Users')(sequelize, Sequelize);
db.posts = require('./models/Posts')(sequelize, Sequelize);

db.users.hasMany(db.posts);
db.posts.belongsTo(db.users);

sequelize.sync({
    alter: true
})

db.sequelize.authenticate().then(() => {
    console.log("Banco conectado com sucesso :)");
}).catch((erro) => {
    console.log("Oops, algo deu errado na conexão com o banco :(" + erro);
});

module.exports = db;