const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
        },
    description: {
        type: String,
        required: true
        },
    imageUrl:{  
        type: String,
        },
    dateToComplete:{
        type: Date,
        required: true
    },
    isCompleted: {
        type: Boolean,
        default: false
        }
})

module.exports = mongoose.model('Todo', todoSchema);