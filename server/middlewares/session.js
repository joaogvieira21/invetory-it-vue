const session = require('express-session');

module.exports = session({
    secret: 'seu-secret-aqui',
    resave: false,
    saveUninitialized: true
});