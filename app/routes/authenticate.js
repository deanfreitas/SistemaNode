const router = require('./index');
const cadastro = require('../controller/cadastro');

router.route('/')
    .get(cadastro.getCadastro)
    .post(cadastro.saveCadastro);