const redis = require("../conf/redis");
const emailModel = require("../Models/emailModel");
const schedule = require("node-schedule");

let exec = 0;
persistir = async () => {
  await redis.smembers("sendEmail", function(err, values) {
    if (!err)
      for (i in values) {
        let value = values[i];
        let email = JSON.parse(value);
        emailModel.create(email);

        redis.SREM("sendEmail", value);
      }
  });
};

const job = schedule.scheduleJob("0-59/5 * * * * *", async date => {
  exec += 1;
  await persistir();
  console.log(`execução número:${exec}, hora:${date}`);
});
