require('dotenv').config();
const express = require('express');
const authRoutes = require('./routes/authRoutes');

const app = express();
app.use(express.json());

app.use('/auth', authRoutes);

//iniciando o servidor
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`servidor rodando na porta ${PORT} e operante`);
});
