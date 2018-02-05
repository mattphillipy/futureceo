var express    = require("express"),
    app        = express(),
    bodyParser = require("body-parser"),
    mongoose   = require("mongoose"),
    methodOverride = require("method-override"),
    seedDB     = require("./seeds"),
    Course     = require("./models/course")
    
    
var courseRoutes = require("./routes/courses"),
    indexRoutes = require("./routes/index")
    

mongoose.connect("mongodb://localhost/futureceo");
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");
app.use(methodOverride("_method"));
app.use(express.static(__dirname + "/public"));
//seedDB();

app.use("/", indexRoutes);
app.use("/courses", courseRoutes);

app.listen(process.env.PORT, process.env.IP, function (){
    console.log("futureCEO server has started");
});