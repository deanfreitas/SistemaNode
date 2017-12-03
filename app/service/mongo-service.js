const mongoWrapper = require('../mongo/mongo-wrapper');

const nameCollection = 'register';

const getOne = async (id) => {
    const db = await mongoWrapper();
    return await db.collection(nameCollection).findOne({id: id});
};

const insertOne = async (register) => {
    const db = await mongoWrapper();
    return await db.collection(nameCollection).insertOne(register);
};

const updateOne = async (newRegister) => {
    const db = await mongoWrapper();
    return await db.collection(nameCollection).updateOne({id: newRegister.id}, {$set: newRegister});
};

const deleteOne = async (id) => {
    const db = await mongoWrapper();
    return await db.collection(nameCollection).deleteOne({id: id});
};

module.exports = {
    getOne: getOne,
    insertOne: insertOne,
    updateOne: updateOne,
    deleteOne: deleteOne,
};