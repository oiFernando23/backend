const express = require('express');
const app = express();
const connection = require('./database/connection')
const routes = require('./routes')
const bodyParser = require('body-parser');
const cors = require ('cors');

app.use((req, res, next) => {
	//Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    // res.header("Access-Control-Allow-Origin", "*");
	//Quais são os métodos que a conexão pode realizar na API
    // res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    app.use(cors());
    next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(routes);

app.listen(process.env.PORT || 3001);