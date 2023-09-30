//server.js

const express = require('express');
const app = express();
const PORT = 3001;

const ocorrenciaRoutes = require('./routes/OcorrenciaRoutes');

// Middleware para arquivos estáticos
app.use(express.static('public'));
app.use(express.static('views'));
app.use(express.static('dist'));


// Rotas
app.use('/api', ocorrenciaRoutes);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

const sequelize = require('./models/conection');

// Isso sincronizará todos os modelos com o banco de dados
sequelize.sync()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Servidor rodando na porta ${PORT}`);
        });
    });
