const mongoose = require("mongoose");

const goalSchema = new mongoose.Schema({
    goalName: {
        type: String
    },
    dueDate: {
        type: Date     
    },
    notes: {
      type: String
    },
    
    goalType: {
    type: String,
    enum: ["Priority", "Median", "Unimportant", ]
}
})



module.exports = mongoose.model('Goal', goalSchema)