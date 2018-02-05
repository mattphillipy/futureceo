var mongoose = require("mongoose")

// SCHEMA SETUP
var courseSchema = new mongoose.Schema({
    name: String, 
    category: String,
    series: String,
    image: String,
    description: String,
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String
    },
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Lesson"
        }
    ]
});

module.exports = mongoose.model("Course", courseSchema);