const mongoose = require("mongoose");

const goalSchema = new mongoose.Schema({
    goalName: {
        type: String
    },
    dueDate: {
        type: Date     
    },
    notes: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Bullet'
    },
    goalType: {
    type: String,
    enum: ["Priority", "Median", "Unimportant", ]
}
})



module.exports = mongoose.model('Goal', goalSchema)