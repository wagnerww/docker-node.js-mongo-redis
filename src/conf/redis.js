const redis = require('redis');
const host = 'redis';
const port = '6379';
const client = redis.createClient(port, host);

client.on('connect', function(){
    console.log('==> Conexão com o REDIS OK!')
})

client.on('error', function (err) {
    console.log('==> Falha na conexão com o REDIS: ' + err);
});

module.exports = client;
