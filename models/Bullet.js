const mongoose = require("mongoose");

const bulletSchema = new mongoose.Schema({
    journal: {
        type: String
    },
    currentDate: {
        type: Date       
    }    
})
module.exports = mongoose.model('Bullet', bulletSchema)