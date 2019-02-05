const mongoose = require("mongoose");
const host = "mongo";
const port = "27017";

mongoose.connect(`mongodb://${host}:${port}`);

mongoose.connection.on('connected', function(){
    console.log("==> conexão com o MONGO OK!");
});

mongoose.connection.on('error', function(){
    console.log("==> falha na conexão com o MongoDB!");
});

module.exports = mongoose;
