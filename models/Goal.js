const mongoose = require("mongoose")

const goalSchema = new mongoose.Schema({
    goalName: {
        type: String
    },
    dueDate: {
        type: Date     
    },
    notes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Bullet'
    }],
    goalType: {
        type: String,
        enum: ["Priority", "Median", "Unimportant", ]
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

module.exports = mongoose.model('Goal', goalSchema)