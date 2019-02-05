const redis = require('../conf/redis');
const emailModel = require('../Models/emailModel');

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

setInterval(persistir, 5000);
