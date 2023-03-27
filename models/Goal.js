const mongoose = require("mongoose");

const goalSchema = new mongoose.Schema({
    goalName: {
        type: String

    },
    dueDate: {
        type: Date,
        
    },
    notes: {
      type: String,
    },
    dailyTask: [dailyTaskSchema]
})


module.exports = mongoose.model('Goal', goalSchema)