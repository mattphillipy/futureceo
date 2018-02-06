var mongoose = require("mongoose")

// SCHEMA SETUP
var courseSchema = new mongoose.Schema({
    name: String, 
    category: String,
    series: String,
    image: String,
    description: String,
    
});

module.exports = mongoose.model("Course", courseSchema);