const fs = require("fs").promises;

class UserStorage {
  static getUsers(...fields) {
    const users = JSON.parse(data);
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }

  static getUserInfo(id) {
    return fs.readFile('./app/src/databases/users.json')
      .then((data) => {
        const users = JSON.parse(data);
        const idx = users.id.indexOf(id);
        const userInfo = Object.keys(users).reduce((newUser, info) => {
          newUser[info] = users[info][idx];
          return newUser;
        }, {});

        return userInfo;
      })
      .catch(console.error);
  }

  static save(userInfo) {
    const users = JSON.parse(data);
    users.id.push(userInfo.id);
    users.name.push(userInfo.name);
    users.password.push(userInfo.password);
    return { success: true };
  }
}

module.exports = UserStorage;
