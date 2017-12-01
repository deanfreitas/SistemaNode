const mongoWrapper = require('../mongo/mongo-wrapper');

const nameCollection = 'cadastro';

const getOne = async (nome, idade) => {
    const db = await mongoWrapper();
    await db.collection(nameCollection).findOne({}, {nome: nome, idade: idade}, (err, result) => {
        if (result) {
            return result;
        }
    });
};

module.exports = {
    getOne: getOne,
};