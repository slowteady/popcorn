const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
	email: {
		type: String,
		required: true,
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
		required: true,
		unique: true,
	},
}, { collection: 'users' });

module.exports = mongoose.model('User', userSchema);