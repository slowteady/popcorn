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

        if(users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if(users.password[idx] === password) {
                return res.json({
                    success: true
                });
            }
            return res.json({
                success: false,
                msg: "로그인 실패"
            });
        }
    }
};

const users = {
    id: ["lym", "ace"],
    password: ["123", "1234"]
};

module.exports = {
    output,
    process
};