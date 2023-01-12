const mongoose = require("mongoose")

const TaskSchema = new mongoose.Schema({
    taskname:{
        type: String,
        required: true
    },
    taskcreater:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Task", TaskSchema)