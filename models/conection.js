// models/index.js

const Sequelize = require('sequelize');

// Usuario do Banco de Dados
const sequelize = new Sequelize('lab', 'root', 'Teste@123', {
    host: 'localhost',
    dialect: 'mariadb',
    logging: false // Defina como true se quiser ver logs das queries no console
});

sequelize.authenticate()
    .then(() => {
        console.log('Conexão com MariaDB realizada com sucesso.');
    })
    .catch(err => {
        console.error('Erro na conexão com MariaDB:', err);
    });

module.exports = sequelize;
