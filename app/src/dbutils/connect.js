const mongoose = require('mongoose');

const uri = 'mongodb+srv://admin:admin@cluster0.kntf4.mongodb.net/?retryWrites=true&w=majority';

const connectToMongo = async () => {
    try {
        await mongoose.connect(uri, { dbName: 'popcorn' });
        console.log('MongoDB 연결 완료');
    } catch (err) {
        console.error('MongoDB 연결 오류', err);
    }
};

module.exports = connectToMongo;