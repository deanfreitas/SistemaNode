const mongoService = require('../service/mongo-service');

const getRegister = async (req, res) => {
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

const saveRegister = async (req, res) => {
    const register = req.body.register;
    let message;
    let code;

    try {
        await mongoService.insertOne(register);
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

const updateRegister = async (req, res) => {
    const newRegister = req.body.register;

    try {
        const register = await mongoService.getOne(newRegister.id);
        if (!register) {
            return res.status(404).send();
        }

        const result = await mongoService.updateOne(newRegister.id, newRegister);

        if (result.nModified === 0) {
            return result.status(304).send();
        }

    } catch (err) {

    }
};

const deleteRegister = async (req, res) => {

};

module.exports = {
    getRegister: getRegister,
    saveRegister: saveRegister,
    updateRegister: updateRegister,
    deleteRegister: deleteRegister,
};