const User = require('../model/User');

const output = {
    index: (req, res) => {
        res.render('login');
    },
    login: (req, res) => {
        res.render('login');
    },
    signup: (req, res) => {
        res.render('signup');
    }
};

const process = {
    login: (req, res) => {
        const user = new User(req.body);
        const response = user.login();
        return res.json(response);
    },
    signup: (req, res) => {
        const user = new User(req.body);
        const response = user.signup();
        return res.json(response);
    }
};

module.exports = {
    output,
    process
};