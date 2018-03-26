const express = require('express');

const routes = require('./routes');

const app = express();

app.use('/api', routes.api);
app.use('/', routes.views);

module.exports = app;
