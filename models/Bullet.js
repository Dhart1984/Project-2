const mongoose = require("mongoose")

const bulletSchema = new mongoose.Schema({
    journal: {
        type: String
    },
    currentDate: {
        type: Date       
    }, 
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    userName: String,
    userAvatar: String
    
},{
    timestamps: true
})

module.exports = mongoose.model('Bullet', bulletSchema)