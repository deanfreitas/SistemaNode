const router = require('./index');
const cadastro = require('../controller/cadastro-controller');

router.route('/getcadastro/:id')
    .get(cadastro.getCadastro);

router.route('cadastrar')
    .post(cadastro.saveCadastro);
