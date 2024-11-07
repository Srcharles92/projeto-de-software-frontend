const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const app = express();
const port = 4000;

app.use(cors({
    origin: 'http://127.0.0.1:5500',  
    methods: ['GET', 'POST', 'DELETE'], 
}));



const db = mysql.createConnection({
    host: '127.0.0.1',       
    user: 'root',    
    password: 'Meliza84.',   
    database: 'livraria'  
});

// Conecta ao banco de dados
db.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        return;
    }
    console.log('Conexão com o banco de dados estabelecida.');
});


app.use(express.json());


app.get('/api/livros', (req, res) => {
    const { title } = req.query;

    
    const sql = `SELECT * FROM livros WHERE title LIKE ?`;
    const values = [`%${title}%`]; // valor para busca parcial

    db.query(sql, values, (err, results) => {
        if (err) {
            console.error('Erro na consulta ao banco de dados:', err);
            res.status(500).json({ error: 'Erro ao consultar banco de dados' });
            return;
        }

        // Retorna os resultados em formato JSON
        if (results.length > 0) {
            res.json(results);  // Responde com o JSON dos livros encontrados
        } else {
            res.json({ message: 'Nenhum livro encontrado com esse título.' });  // Resposta JSON de mensagem
        }
    });
});


app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
