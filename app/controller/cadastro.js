const mongoService = require('../service/mongo-service');

const saveCadastro = (req, res) => {
    res.render('index', {title: 'Express'});
};

const getCadastro = async (req, res) => {
    let result = await mongoService.getOne('gilberto', '22');
    if (!result) {
        return res.status(404).send();
    }
    return res.status(200).send(result);
};

module.exports = {
    getCadastro: getCadastro,
    saveCadastro: saveCadastro,
};