let mongoose = require("mongoose");

let concertSchema = mongoose.Schema({
    date:{
        type: String,
        required: true
    },
    place:{
        type: String,
        required: true
    }
});

let Concert = module.exports = mongoose.model("Concert", concertSchema);