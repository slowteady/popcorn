const express = require('express');
const path = require('path');

const indexRouter = require('./server/routes');
// const userRouter = require('./server/routes/user');

const app = express();
let port = 3000;

app.use('/', indexRouter);
// app.use('/user', userRouter);
app.use(express.static('static'));

app.use((req, res, next) => {
    res.status(404).send('Not Found');
});

app.listen(port, () => {
    console.log(`${port} port is on!!`);
});