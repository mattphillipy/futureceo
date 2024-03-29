var express    = require("express"),
    app        = express(),
    bodyParser = require("body-parser"),
    mongoose   = require("mongoose"),
    passport   = require("passport"),
    LocalStrategy = require("passport-local"),
    methodOverride = require("method-override"),
    seedDB     = require("./seeds"),
    Course     = require("./models/course"),
    Lesson    = require("./models/lesson"),
    User       = require("./models/user")
    
    
var courseRoutes = require("./routes/courses"),
    lessonRoutes = require("./routes/lessons"),
    indexRoutes = require("./routes/index")
    
var url = process.env.DATABASEURL || "mongodb://localhost/futureceo"
mongoose.connect(url);

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");
app.use(methodOverride("_method"));
app.use(express.static(__dirname + "/public"));
//seedDB();

// PASSPORT CONFIGURATION
app.use(require("express-session")({
    secret: "tiger mountain is close to my house",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    next();
});

app.use("/", indexRoutes);
app.use("/courses", courseRoutes);
app.use("/courses/:id/lessons", lessonRoutes);

app.listen(process.env.PORT, process.env.IP, function (){
    console.log("futureCEO server has started");
});