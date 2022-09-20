class UserStorage {
    static #users = {
        id: ["lym", "ace"],
        password: ["123", "1234"],
        name: ["이용민", "안채은"]
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if(users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }
}

module.exports = UserStorage;