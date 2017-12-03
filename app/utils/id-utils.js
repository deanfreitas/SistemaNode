const uuidv4 = require('uuid/v4');

const getId = () => {
    return uuidv4().replace(/\W/g, '');
};

module.exports = {
    getId: getId,
};