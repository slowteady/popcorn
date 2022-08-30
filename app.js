const express = require('express');
const path = require('path');

const indexRouter = require('./routes');
const userRouter = require('./routes/user');

const app = express();
let port = 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use('/', indexRouter);
app.use('/user', userRouter);

app.use((req, res, next) => {
    res.status(404).send('Not Found');
});

app.listen(port, () => {
    console.log(`${port} port is on!!`);
});