const mongoose = require("mongoose");

const bulletSchema = new mongoose.Schema({
    journal: {
        type: String
    },
    date: {
        type: Date       
    }    
})
module.exports = mongoose.model('Bullet', bulletSchema)