const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
	id: {
		type: String,
		unique: true,
	},
	username: {
		type: String,
	},
	password: {
		type: String,
	},
	phone: {
		type: String,
	},
}, { collection: 'users' });

module.exports = mongoose.model('User', userSchema);