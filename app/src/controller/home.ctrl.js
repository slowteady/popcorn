const UserStorage = require("../model/UserStorage");

const output = {
    index: (req, res) => {
        res.render('login');
    },
    login: (req, res) => {
        res.render('login');
    }
};

const process = {
    login: (req, res) => {
        const id = req.body.id,
        password = req.body.password;
        const response = {};
        if(users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if(users.password[idx] === password) {
                response.success = true;
                return res.json(response);
            }
        }
        
        response.success = false;
        response.msg = "로그인 실패";
        return res.json(response);
    }
};

module.exports = {
    output,
    process
};