var mongoose = require("mongoose")

// SCHEMA SETUP
var seriesSchema = new mongoose.Schema({
    id: String, 
    name: String,
    
    
});

module.exports = mongoose.model("Series", seriesSchema);