const mongoose = require("mongoose");

const dailyTaskSchema = new mongoose.Schema({
    taskName: {
        type: String,

    },
    dueDate: {
        type: Date,        
    },
    taskType: {
        type: String,
        enum: ["Work", "Health", "Fitness", "Household", "Travel", "Shopping", "Other"]
    }
})


module.exports = mongoose.model('Daily-Task', dailyTaskSchema)