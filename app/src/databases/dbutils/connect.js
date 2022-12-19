const mongoose = require('mongoose');

const uri = 'mongodb+srv://admin:admin@cluster0.kntf4.mongodb.net/?retryWrites=true&w=majority';

const connectToMongo = async () => {
    try {
        await mongoose.connect(uri, { dbName: 'popcorn' });
        console.log('CONNECT TO MONGODB');
    } catch (err) {
        console.error('ERROR TO MONGODB: ', err);
    }
};

module.exports = connectToMongo;