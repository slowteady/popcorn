const userSchema = require("../databases/schemas/userSchema");

// User 클래스
class User {
  constructor(body) {
    this.body = body;
  }
  
  // 로그인
  login() {
    const { id, password } = this.body;
    try {
      return userSchema.findOne({ id, password }).exec();
    } catch (err) {
      console.error(err);
    }
  }

  // 회원가입
  async signup() {
    try {
      const client = this.body;
      const user = new userSchema(client);
      await user.save();
      return true;
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = User;
