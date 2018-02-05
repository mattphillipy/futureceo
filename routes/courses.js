var express = require("express");
var router  = express.Router();
var Course= require("../models/course");
var middleware = require("../middleware");


//INDEX - shows all courses
router.get("/", function(req, res){
    // Get all campgrounds from DB
    Course.find({}, function(err, allCourses){
        if(err){
            console.log(err);
        } else {
            res.render("courses/index",{courses:allCourses});
        }
    });
});



module.exports = router;