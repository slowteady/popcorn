const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const nunjucks = require('nunjucks');
const morgan = require('morgan');
const mongoose = require('./src/databases/dbutils/connect');

const indexRouter = require('./src/server/routes');

// DB 연결
mongoose();

const app = express();

app.set('view engine', 'html');
nunjucks.configure('./app/src/views', {
    express: app,
    watch: true
});

app.use(bodyParser.json());
// 한글, 공백이 포함될 경우 정상적으로 인식되지 않는 문제를 도와줌
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan('dev'));
app.use(express.static(__dirname + '/src/static'));

app.use('/', indexRouter);
app.use((req, res, next) => {
    res.status(404).send('Not Found');
});

module.exports = app;