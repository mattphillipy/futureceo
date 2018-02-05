var express    = require("express"),
    app        = express(),
    bodyParser = require("body-parser"),
    methodOverride = require("method-override")
    
    
var indexRoutes = require("./routes/index")

// mongoose.connect("mongodb://localhost/futureceo");
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");
app.use(methodOverride("_method"));
app.use(express.static(__dirname + "/public"));

app.use("/", indexRoutes);

app.listen(process.env.PORT, process.env.IP, function (){
    console.log("futureCEO server has started");
});