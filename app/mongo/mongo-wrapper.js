const MongoClient = require('mongodb').MongoClient;

const host = 'localhost';
const port = '27017';
const url = 'mongodb://' + host + ':' + port + '/integration_test';

const connect = async () => {
    return await MongoClient.connect(url);
};

module.exports = connect;