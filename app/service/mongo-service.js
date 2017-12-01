const mongoWrapper = require('../mongo/mongo-wrapper');

const nameCollection = 'cadastro';

const getOne = async (id) => {
    const db = await mongoWrapper();
    await db.collection(nameCollection).findOne({}, {id: id}, (err, result) => {
        if (result) {
            return result;
        }
    });
};

const insertOne = async (cadastro) => {
    const db = await mongoWrapper();
    await db.collection(nameCollection).insertOne(cadastro, (err, result) => {
        if(result) {
            return result;
        }
    })
};

const updateOne = async (cadastro, newCadastro) => {
    const db = await mongoWrapper();
    await db.collection(nameCollection).updateOne(cadastro, newCadastro, (err, result) => {
        if(result) {
            return result;
        }
    })
};

module.exports = {
    getOne: getOne,
    insertOne: insertOne,
    updateOne: updateOne,
};