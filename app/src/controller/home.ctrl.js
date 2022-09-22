const UserStorage = require("../model/UserStorage");
const User = require('../model/User');

const output = {
    index: (req, res) => {
        res.render('login');
    },
    login: (req, res) => {
        res.render('login');
    },
    register: (req, res) => {
        res.render('register');
    }
};

const process = {
    login: (req, res) => {
        const user = new User(req.body);
        const response = user.login();
        return res.json(response);
    }
};

module.exports = {
    output,
    process
};