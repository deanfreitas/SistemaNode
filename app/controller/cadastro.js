const saveCadastro = (req, res) => {
    res.render('index', {title: 'Express'});
};

module.exports = {
    saveCadastro: saveCadastro,
};