const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); 

// Acesso aos outros html para alcance do Express
const caminhoRaiz = path.join(__dirname, '..', '..');
app.use(express.static(caminhoRaiz));

// Conexão ao banco de dados
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin', 
    database: 'vocantis_db'
});

db.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao MySQL:', err);
        return;
    }
    console.log('Conexão concluída!');
});

// Rotas de páginas
app.get('/', (req, res) => {
    res.sendFile(path.join(caminhoRaiz, 'index.html'));
});

app.get('/perguntas', (req, res) => {
    res.sendFile(path.join(caminhoRaiz, 'perguntas.html'));
});


// Rota Cadastro
app.post('/cadastro', async (req, res) => {

    const { nome, email, telefone, idade, cidade, escolaridade, senha } = req.body;

    // Inserindo em colunas separadas
    const sql = `INSERT INTO usuarios (nome, email, telefone, idade, cidade, escolaridade, senha) 
                 VALUES (?, ?, ?, ?, ?, ?, ?)`;
    
    const valores = [nome, email, telefone, idade, cidade, escolaridade, senha];

    db.query(sql, valores, (err, result) => {
        if (err) return res.status(500).send("Erro no banco: " + err.message);
        res.status(201).send("Usuário cadastrado com sucesso!");
    });
});

// Rota Login
app.post('/login', (req, res) => {

    const { email, senha } = req.body;
    const sql = "SELECT * FROM usuarios WHERE email = ?";

    db.query(sql, [email], (err, results) => {
        if (err) return res.status(500).send('Erro no servidor.');
        
        // Verifica a lista de resultados
        if (results.length > 0) {
            const usuario = results[0]; // Extrai o usuário encontrado

            // Verficação de senha
            if (senha === usuario.senha) {
                res.status(200).send('Login aprovado!');
            } else {
                res.status(401).send('Senha incorreta.');
            }
        } else {
            res.status(404).send('Usuário não encontrado.');
        }
    });
});

// Inicializar servidor
const port = 3000;
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
