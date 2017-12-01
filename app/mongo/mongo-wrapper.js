const MongoClient = require('mongodb').MongoClient;

const host = 'localhost';
const port = '27017';
const url = 'mongodb://' + host + ':' + port + '/integration_test';

let db;

const connect = () => {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, (err, database) => {
            if (err) {
                reject(err);
            }
            if (db) {
                resolve(db);
            }
            db = database;
            resolve(db);
        })
    })
};

module.exports = connect;