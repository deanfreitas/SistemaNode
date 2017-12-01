const mongoService = require('../service/mongo-service');

const getCadastro = async (req, res) => {
    const id = req.params.id;
    try {
        let result = await mongoService.getOne(id);
        if (!result) {
            return res.status(404).send();
        }
        return res.status(200).send(result);
    } catch (err) {
        return res.status(500).send(err);
    }
};

const saveCadastro = async (req, res) => {
    const cadastro = req.body.cadastro;
    let message;
    let code;

    try {
        await mongoService.insertOne(cadastro);
        return res.status(201).send('User successfully registered');
    } catch (err) {
        if (err.code === 11000) {
            message = 'E11000 duplicate key error collection';
            code = 409;
        } else {
            message = 'User error registering';
            code = 500;
        }

        return res.status(code).send(message);
    }
};

const updateCadastro = async () => {

};

module.exports = {
    getCadastro: getCadastro,
    saveCadastro: saveCadastro,
};