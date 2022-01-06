const express = require('express');
const app = express();
const connection = require('./database/connection')
const routes = require('./routes')
const bodyParser = require('body-parser');
const cors = require ('cors');

app.use((req, res, next) => {
	console.log('acessou')
    // //Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    // res.header("Access-Control-Allow-Origin", "*");
	// //Quais são os métodos que a conexão pode realizar na API
    // res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    // app.use(cors());
    // next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(routes);

app.listen(process.env.PORT || 3001);