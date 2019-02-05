const express = require('express');
const bodyParser = require("body-parser");
const redis = require('./conf/redis');
const mongo = require('./conf/db');
const port = 3000;
const app = express();

app.use(bodyParser.json());

app.post('/', async (req, res) => {
    console.log('body', req.body)
    const value = JSON.stringify(req.body);
    let retorno = { mensagem: 'Email enviado para a fila de processamento' }

    await redis.SADD("sendEmail", value, function (err, success) {
        if (!err)
            retorno = { mensagem: `Falha ao enviar email para a fila: ${err}` }

    });

    res.send(retorno)
});

app.listen(port);
