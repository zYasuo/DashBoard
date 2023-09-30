// routes/ocorrenciaRoutes.js

const express = require('express');
const router = express.Router();
const Ocorrencia = require('../models/Ocorrencia');  // Importando o modelo Ocorrencia

router.get('/Ocorrencias', async (req, res) => {
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

module.exports = router;

