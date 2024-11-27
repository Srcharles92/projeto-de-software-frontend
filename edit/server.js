const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2'); 
const cors = require('cors'); 

const app = express();
const port = 4000;


app.use(cors());
app.use(bodyParser.json());


const db = mysql.createConnection({
    host: '127.0.0.1',       
    user: 'root',    
    password: 'Meliza84.',   
    database: 'livraria'
});


db.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
    } else {
        console.log('Conectado ao banco de dados MySQL.');
    }
});


app.put('/api/livros/:id', (req, res) => {
    const { id } = req.params; 
    const { title, author, publisher, pages, year_published } = req.body;

    const sql = `
        UPDATE livros
        SET title = ?, author = ?, publisher = ?, pages = ?, year_published = ?
        WHERE id = ?
    `;
    const values = [title, author, publisher, pages, year_published, id];

    db.query(sql, values, (err, result) => {
        if (err) {
            console.error('Erro ao atualizar o livro:', err);
            res.status(500).json({ error: 'Erro ao atualizar o livro.' });
        } else {
            res.json({ message: 'Livro atualizado com sucesso!' });
        }
    });
});


app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
