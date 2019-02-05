const redis = require('../conf/redis');
const mongo = require('../conf/db');

persistir = async () => {

    let arrValues = [];

    await redis.smembers("sendEmail", function (err, values) {
        if (!err)
            arrValues = arrValues.concat(values);
            console.log('value', arrValues)
    });
}

setInterval(persistir, 5000);
