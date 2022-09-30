const mongoose = require('mongoose');
const { userSchema } = mongoose;

const schema = new userSchema({
	email: {
		type: String,
		required: true,
		unique: true,
	},
	userName: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	phone: {
		type: Number,
		required: true,
		unique: true,
	},
});

module.exports = mongoose.model('User', schema);