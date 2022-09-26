const UserStorage = require('./UserStorage');

// User 클래스
class User {
    constructor(body) {
        this.body = body;
    }
	// 로그인 
    login() {
        const client = this.body;
        const { id, password } = UserStorage.getUserInfo(client.id);

        if(id) {
            if (id === client.id && password === client.password) {
                return { success: true };                
            }
            return { success: false, msg: "비밀번호가 틀렸습니다."};
        }
        return { success: false, msg: "존재하지 않는 아이디 입니다"};
    }

	// 회원가입 
    register() {
        const client = this.body;
        UserStorage.save(this.body);
    }
}

module.exports = User;