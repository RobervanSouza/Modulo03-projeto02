const express = require('express'); // chama o express para o codigo
const cors = require('cors'); 
const routes = require('./src/routes/convite.route');
const conectDatabase = require('./src/database/database');// import database

const port = 3000; // pode fazer a alteração da port 
const app = express(); // ativa express app

conectDatabase(); // ativa conecta data base
app.use(express.json());
app.use(cors());
app.use('/convites', routes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`); // mensagem para mostra  o local onde o servidor esta rodando. 
});
