let mongoose = require("mongoose");

let albSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    cover:{
        type: String,
        required: true
    },
    songs:{
        type:String,
        required: true
    }
});

let Alb = module.exports = mongoose.model("Alb", albSchema);