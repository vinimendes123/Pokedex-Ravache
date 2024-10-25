const express = require('express');
const router = express.Router();
const treinadorController = require('../Controller/treinadorController');

// Rota para obter todos os treinadores
router.get('/treinadores', treinadorController.getAllTreinadores);

// Rota para obter um treinador específico
router.get('/treinadores/:id', treinadorController.getTreinador);

// Rota para exibir o formulário de cadastro do treinador
router.get('/cadastro-treinador', treinadorController.getCadastroTreinador); // Alterado para obter a página

// Rota para cadastrar um novo treinador
router.post('/cadastro-treinador', treinadorController.createTreinador); // Rota para processar o cadastro

module.exports = router;
