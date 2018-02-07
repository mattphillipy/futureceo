var express = require("express");
var router  = express.Router();
var Course= require("../models/course");
var middleware = require("../middleware");


//INDEX - shows all courses
router.get("/", function(req, res){
    // Get all courses from DB
    Course.find({}, function(err, allCourses){
        if(err){
            console.log(err);
        } else {
            res.render("courses/index",{courses:allCourses});
        }
    });
});

//NEW - show form to create course
router.get("/new", middleware.isLoggedIn, function(req, res){
    res.render("courses/new");
});

//CREATE - add new course to DB
router.post("/", middleware.isLoggedIn, function(req, res){
     //get data from form and add to courses array
    var name = req.body.name;
    var category = req.body.category;
    var series = req.body.series;
    var desc = req.body.description;
    var image = req.body.image;
    
    var newCourse = {name: name, category: category, series: series, description: desc, image: image, };
    // Create a new course and save to database
    Course.create(newCourse, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            //redirect back to courses page
            console.log(newlyCreated);
            res.redirect("/courses");
        }
    });
});

// SHOW - shows more info about one course
router.get("/:id", function(req, res){
    //find the course with provided ID
    Course.findById(req.params.id).exec(function(err, foundCourse){
        if(err){
            console.log(err);
        } else {
            console.log(foundCourse);
            //render show template with that course
            res.render("courses/show", {course: foundCourse});
        }
    });
});


module.exports = router;