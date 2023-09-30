// ====== IMPORTAÇÕES ======
const express = require('express');
const http = require('http');
const ioModule = require('socket.io');
const sequelize = require('./models/conection');
const ocorrenciaRoutes = require('./routes/OcorrenciaRoutes');

// ====== CONFIGURAÇÕES INICIAIS ======
const app = express();
const server = http.createServer(app);
const io = ioModule(server);
const PORT = 3002;

// Exportando a instância do Socket.io para uso em outros módulos
module.exports.io = io;

// ====== MIDDLEWARES ======
// Middleware para arquivos estáticos
app.use(express.static('public'));
app.use(express.static('views'));
app.use(express.static('dist'));
app.use(express.json()); // para parsing de JSON no body das requisições

// ====== ROTAS ======
app.use('/api', ocorrenciaRoutes);
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

// ====== CONFIGURAÇÕES DO SOCKET.IO ======
io.on('connection', (socket) => {
    console.log('Um usuário conectou');

    socket.on('disconnect', () => {
        console.log('Um usuário desconectou');
    });
});

// ====== INICIALIZAÇÃO DO SERVIDOR ======
// Isso sincronizará todos os modelos com o banco de dados
sequelize.sync()
    .then(() => {
        server.listen(PORT, () => {
            console.log(`Servidor rodando na porta ${PORT}`);
        });
    });
