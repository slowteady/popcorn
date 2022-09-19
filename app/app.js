const express = require('express');
const path = require('path');
const nunjucks = require('nunjucks');
const morgan = require('morgan');

const indexRouter = require('./src/server/routes');
// const userRouter = require('./server/routes/user');

const app = express();

app.set('view engine', 'html');
nunjucks.configure('./src/views', {
    express: app,
    watch: true
});

app.use('/', indexRouter);
// app.use('/user', userRouter);
app.use(morgan('dev'));
app.use(express.static(__dirname + '/src/static'));

app.use((req, res, next) => {
    res.status(404).send('Not Found');
});




module.exports = app;