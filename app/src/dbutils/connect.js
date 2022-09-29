const mongoose = require('mongoose');

const uri = 'mongodb+srv://admin:admin@cluster0.kntf4.mongodb.net/?retryWrites=true&w=majority';

const connectToMongo = async () => {
    try {
        await mongoose.connect(uri);
        console.log('MongoDB 연동 완료');
    } catch (err) {
        console.error(err);
    }
};

module.exports = connectToMongo;