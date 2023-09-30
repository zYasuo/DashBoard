// models/Ocorrencia.js

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./conection');

const Ocorrencia = sequelize.define('Ocorrencia', {
    // Aqui estou supondo que "assunto" e "vlan" são strings. Ajuste conforme necessário.
    assunto: {
        type: DataTypes.STRING,
        allowNull: false
    },
    vlan: {
        type: DataTypes.STRING,
        allowNull: false
    },
    assinantes: {
        type: DataTypes.STRING,
        allowNull: false
    }
    // Você pode adicionar mais campos conforme necessário
}, {
    tableName: 'OcorrenciasNR',  // Nome da tabela no banco
    timestamps: true  // Isso adicionará os campos createdAt e updatedAt automaticamente
});

module.exports = Ocorrencia;
