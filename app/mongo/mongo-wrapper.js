const MongoClient = require('mongodb').MongoClient;

const host = 'localhost';
const port = '27017';
const db = 'iam';
const url = 'mongodb://' + host + ':' + port + '/' + db;

const connect = async () => {
    return await MongoClient.connect(url);
};

module.exports = connect;