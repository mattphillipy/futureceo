var mongoose = require("mongoose");

var lessonSchema = mongoose.Schema({
    name: String,
    number: String,
    section: String,
    description: String,
    materials: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Material"
        }
    ]
});


module.exports = mongoose.model("Lesson", lessonSchema);