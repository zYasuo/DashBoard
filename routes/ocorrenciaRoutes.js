// routes/ocorrenciaRoutes.js

const express = require('express');
const router = express.Router();
const Ocorrencia = require('../models/Ocorrencia');  // Importando o modelo Ocorrencia
const io = require('../server').io;  // Importando a instância do Socket.io

//Definição da Rota:
router.get('/ocorrencias', async (req, res) => {
    try {
        const ocorrencias = await Ocorrencia.findAll({
            attributes: ['assunto', 'vlan', 'assinantes']
        });
        res.json(ocorrencias);
    } catch (err) {
        console.error(err);
        res.status(500).send("Erro ao buscar as ocorrências");
    }
});

//Definição da Rota:

router.post('/addOcorrencia', async (req, res) => {
    try {
        //Extração dos Dados da Requisição:
        const { assunto, vlan, assinantes } = req.body;

        //Criação de uma Nova Ocorrência:

        const novaOcorrencia = await Ocorrencia.create({
            assunto,
            vlan,
            assinantes
        });

        // Emita o evento para o cliente
        io.emit('novaOcorrencia', novaOcorrencia);

        //Resposta à Requisição:
        res.status(201).json(novaOcorrencia);
    } catch (err) {
        //Manipulação de Erros:
        console.error(err);
        res.status(500).send("Erro ao adicionar a ocorrência");
    }
});
//Exportação do Router:
module.exports = router;

