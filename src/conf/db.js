const mongoose = require("mongoose");
const host = "mongo";
const port = "27017";

mongoose.connect(`mongodb://${host}:${port}/email`).then(connect => {
    console.log("==> conexão com o MONGO OK!");
}).catch(err => {
    console.log("==> falha na conexão com o MongoDB!");
});
/*
mongoose.connection.on('connected', function () {

});

mongoose.connection.on('error', function () {

});*/

module.exports = mongoose;
