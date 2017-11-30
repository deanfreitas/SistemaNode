const MongoClient = require('mongodb').MongoClient;

const host = 'localhost';
const port = '27017';
const url = 'mongodb://' + host + ':' + port + '/integration_test';

let db;

const connect = MongoClient.connect(url, (err, database) => {
    if (db) {
        return db;
    }

    if(err) {
        throw err;
    }

    db = database;

    return db;
});

module.exports = connect;