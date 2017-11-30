const db = require('../mongo/mongo-wrapper');

const nameCollection = 'cadastro';

const getOnly = async (name) => {
    await db.collection(nameCollection).findOne({}, {name: name}, (err, result) => {
        if(err) {
            throw err;
        }

    });
};