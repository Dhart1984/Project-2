const mongoose = require("mongoose")

const dailyTaskSchema = new mongoose.Schema({
    taskName: {
        type: String
    },
    dueDate: {
        type: Date     
    },
    taskType: {
        type: String,
        enum: ["Work", "Health", "Fitness", "Household", "Travel", "Shopping", "Other"]
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

module.exports = mongoose.model('Daily-Task', dailyTaskSchema)