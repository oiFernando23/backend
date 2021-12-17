const { Sequelize } = require('sequelize');

//database', 'username', 'password'
const sequelize = new Sequelize('MyBodyMyArt', 'postgres', '1234', {
    host: 'localhost',
    dialect: 'postgres'
});

const db = {}; 

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require('./models/Users')(sequelize, Sequelize);
db.posts = require('./models/Posts')(sequelize, Sequelize);

db.users.hasMany(db.posts);
db.posts.belongsTo(db.users);

// sequelize.sync({
//     alter: true
// })

db.sequelize.authenticate().then(() => {
    console.log("Banco conectado com sucesso :)");
}).catch((erro) => {
    console.log("Oops, algo deu errado na conexão com o banco :(" + erro);
});

module.exports = db;