const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/teste', (req, res) => {
    res.json({mensagem: "rodando e operante"});
});

//iniciando o servidor
const PORT = 5000;
app.listen(PORT, () => {
    console.log("servidor rodando na porta ${PORT}");
});

