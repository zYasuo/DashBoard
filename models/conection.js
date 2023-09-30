// models/index.js

const Sequelize = require('sequelize');

// Usuario do Banco de Dados
const sequelize = new Sequelize('Cadastro', 'cadastro', 'Nrnoc4@35*', {
    host: '10.50.50.30',
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
