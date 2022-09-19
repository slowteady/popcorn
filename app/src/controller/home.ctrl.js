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
        console.log(req.body);
    }
};


module.exports = {
    output,
    process
};