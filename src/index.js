const express = require('express');
const app = express();
const connection = require('./database/connection')
const routes = require('./routes')
const bodyParser = require('body-parser');
const cors = require ('cors');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(routes);

app.listen(process.env.PORT || 3001);