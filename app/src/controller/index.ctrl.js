const User = require('../model/User');
const userSchema = require('../databases/schemas/userSchema');

const output = {
    index: (req, res) => {
        res.render('login');
    },
    login: (req, res) => {
        res.render('login');
    },
    signup: (req, res) => {
        res.render('signup');
    },
	list: (req, res) => {
		res.render('list');
	}
};

const process = {
    login: async (req, res) => {
        const user = new User(req.body);
        const response = await user.login();
        // return res.json(response);
    },
    signup: (req, res) => {
        try {
            const data = req.body;
            const user = new User(data);
            user.signup();
            // return res.json({ success: true });
        } catch(err) {
            if(err) return new Error(err);
        }
    },
    idCheck: async (req, res, next) => {
        try {
            const data = req.body;
            const result = await userSchema.findOne({id: data.val});
            res.json(result ? { success: true } : { success: false });
        } catch(err) {
            next(err);
        }
    }
};

module.exports = {
    output,
    process
};