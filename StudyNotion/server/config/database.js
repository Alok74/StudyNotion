const mongoose = require("mongoose");
require("dotenv").config();

exports.connect = () => {
};
mongoose.connect("mongodb://127.0.0.1:27017/Alok", {
        useNewUrlParser: true,
        useUnifiedTopology:true,
    })
    .then(() => console.log("DB Connected Successfully"))
    .catch( (error) => {
        console.log("DB Connection Failed");
        console.error(error);
        process.exit(1);
    } )