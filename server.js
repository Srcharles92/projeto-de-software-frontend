const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Importe o middleware cors


const app = express();
const port = 4000;

// Middleware para permitir requisições de outras origens
app.use(cors());  // Adicione o CORS para permitir requisições externas
// Middleware para processar dados JSON
app.use(bodyParser.json());

app.post('/books', (req, res) => {
    const { title, author, published, qtPages, yearPublished } = req.body;

    // Aqui você pode salvar os dados no banco de dados
    console.log('Dados recebidos:', { title, author, published, qtPages, yearPublished });

    // Responde com uma mensagem de sucesso
    res.json({ message: 'Livro cadastrado com sucesso' });
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});