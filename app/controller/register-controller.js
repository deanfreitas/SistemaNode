const mongoService = require('../service/mongo-service');
const idUtils = require('../utils/id-utils');

const getRegister = async (req, res) => {
    const id = req.params.id;
    try {
        let result = await mongoService.getOne(id);
        if (!result) {
            return res.sendStatus(404);
        }
        return res.status(200).send(result);
    } catch (err) {
        return res.status(500).send(err);
    }
};

const saveRegister = async (req, res) => {
    const idRegister = idUtils.getId();
    const register = req.body;
    register.id = idRegister;

    try {
        const result = await mongoService.insertOne(register);
        if (result && result.result.n === 1) {
            return res.status(201).send({id: idRegister});
        }

        return res.status(500).send('Error create register');
    } catch (err) {
        if (err.code === 11000) {
            return res.status(409).send('E11000 duplicate key error collection');
        }

        return res.status(500).send(err.message);
    }
};

const updateRegister = async (req, res) => {
    const newRegister = req.body;

    try {
        const register = await mongoService.getOne(newRegister.id);
        if (!register) {
            return res.sendStatus(404);
        }

        const result = await mongoService.updateOne(newRegister);
        if (!result) {
            return res.status(500).send('Error update register');
        }
        if (result.result.n === 0) {
            return res.sendStatus(404);
        }
        if (result.result.nModified === 0) {
            return res.sendStatus(304);
        }

        return res.sendStatus(200);

    } catch (err) {
        return res.status(500).send(err.message);
    }
};

const deleteRegister = async (req, res) => {
    const register = req.body;

    try {
        const isRegister = await mongoService.getOne(register.id);
        if (!isRegister) {
            return res.sendStatus(404);
        }

        const result = await mongoService.deleteOne(register.id);
        if (!result) {
            return res.status(500).send('Error delete register');
        }

        if (result.result.n === 0) {
            return res.sendStatus(404);
        }

        return res.sendStatus(200);

    } catch (err) {
        return res.status(500).send(err.message);
    }
};

module.exports = {
    getRegister: getRegister,
    saveRegister: saveRegister,
    updateRegister: updateRegister,
    deleteRegister: deleteRegister,
};