const express = require('express');
const routes = require('./routes');
const bodyParser = require('body-parser');

const { notFound, errorHandler } = require('./middleware/error');

const app = express();

app.use(bodyParser.json());

app.use(routes);

app.use(notFound);
app.use(errorHandler('environment goes here'));


module.exports = app;