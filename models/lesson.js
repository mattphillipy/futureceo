var mongoose = require("mongoose");

var lessonSchema = mongoose.Schema({
    text: String
});


module.exports = mongoose.model("Lesson", lessonSchema);