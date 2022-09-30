const UserStorage = require('./UserStorage');

// User 클래스
class User {
    constructor(body) {
        this.body = body;
    }
	// 로그인 
   async login() {
        const client = this.body;
    //     const { id, password } = await UserStorage.getUserInfo(client.id);

    //     if(id) {
    //         if (id === client.id && password === client.password) {
    //             return { success: true };                
    //         }
    //         return { success: false, msg: "비밀번호가 틀렸습니다."};
    //     }
    //     return { success: false, msg: "존재하지 않는 아이디 입니다"};
    }

	// 회원가입 
    async signup() {
        const client = this.body;
        try {
            const response = await UserStorage.save(client);
            console.log(response);
            // return response;
        } catch (err) {
            console.error(err);
        }
    }
}

module.exports = User;