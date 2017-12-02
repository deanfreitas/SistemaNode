const router = require('./index');
const register = require('../controller/register-controller');

router.route('/register/:id')
    .get(register.getRegister);

router.route('/register')
    .post(register.saveRegister)
    .put(register.updateRegister)
    .delete(register.deleteRegister);
