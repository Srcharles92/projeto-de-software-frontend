// rotas/livros.js
const express = require('express');
const livrosController = require('../controllers/livrosController');

const router = express.Router();


// rota para criar um novo livro (POST)
router.post('/livros/:id', livrosController.criarLivro);


// rota para buscar todos os livros (GET)
router.get('/livros', livrosController.buscarLivros);


// rota para buscar um livro por ID (GET)
router.get('/livros', livrosController.buscarLivrosPorId);


// rota para atualizarum livro (PUT)
router.put('/livros/:id', livrosController);


// rota para deletar um livro (DELETE)
router.delete('/livros/:id', livrosController.deletarLivro);




module.exports = router;