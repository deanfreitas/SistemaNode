const mongoWrapper = require('../mongo/mongo-wrapper');

const nameCollection = 'register';

const getOne = async (id) => {
    const db = await mongoWrapper();
    await db.collection(nameCollection).findOne({}, {id: id}, (err, result) => {
        if (result) {
            return result;
        }
    });
};

const insertOne = async (register) => {
    const db = await mongoWrapper();
    await db.collection(nameCollection).insertOne(register, (err, result) => {
        if (result) {
            return result;
        }
    })
};

const updateOne = async (id, newRegister) => {
    const db = await mongoWrapper();
    await db.collection(nameCollection).updateOne({id: id}, newRegister, (err, result) => {
        if (result) {
            return result;
        }
    })
};

module.exports = {
    getOne: getOne,
    insertOne: insertOne,
    updateOne: updateOne,
};