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
    dailyTask: [{type: mongoose.Schema.Types.ObjectId, ref:'Daily-Task'}]
})


module.exports = mongoose.model('Goal', goalSchema)