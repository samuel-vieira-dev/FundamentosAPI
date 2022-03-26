const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

//Criação da Rota /enviar. Método POST
app.post('/enviar', (req, res) => {
    const nome = req.body.nome;
    const email = req.body.email;

    return res.send(`Muito obrigado ${nome}! O seu E-mail é: ${email}?`);
});

//Criação da Rota /obter. Método GET
app.get('/obter', (req, res) => {

    return res.send(`Resposta da requisição.`);
});

app.listen(port, () => console.log(`Servidor aberto na porta: ${port}!`));