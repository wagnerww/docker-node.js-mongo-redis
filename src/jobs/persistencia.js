//const redis = require('../conf/redis');
//const emailModel = require('../Models/emailModel');
const schedule  = require('node-schedule');

let exec = 0;
const segundosExec = 2;
persistir = async () => {

    await redis.smembers("sendEmail", function (err, values) {
        console.log('valores', values)
        if (!err)
            for (i in values) {
                let value = values[i];
                let email = JSON.parse(value);
                console.log('óbjeto',email)
                emailModel.create(email);

                redis.SREM("sendEmail", value)
            }
    });
}

const job = schedule.scheduleJob('0-59/5 * * * * *', async (date) => {
   exec += 1;
   await console.log(`execução número:${exec}, tempo decorrido:${segundosExec * exec}, hora:${date}`);
});
//setInterval(persistir, 5000);
