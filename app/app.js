const express = require('express');
const path = require('path');
const nunjucks = require('nunjucks');
const morgan = require('morgan');

const indexRouter = require('./src/server/routes');

const app = express();

app.set('view engine', 'html');
nunjucks.configure('./app/src/views', {
    express: app,
    watch: true
});

app.use('/', indexRouter);
app.use(morgan('dev'));
app.use(express.static(__dirname + '/src/static'));

app.use((req, res, next) => {
    res.status(404).send('Not Found');
});

module.exports = app;