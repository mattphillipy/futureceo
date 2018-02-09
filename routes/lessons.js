var express = require("express");
var router  = express.Router({mergeParams: true});
var Course = require("../models/course");
var Lesson = require("../models/lesson");
var middleware = require("../middleware")


//Lessons new
router.get("/new", middleware.isLoggedIn, function(req, res){
    // find course by id
    console.log(req.params.id);
    Course.findById(req.params.id, function(err, course){
        if(err){
            console.log(err);
        } else {
            res.render("lessons/new", {course: course});
        }
    });
});

router.post("/",  middleware.isLoggedIn, function(req, res){
    //lookup course using ID
     Course.findById(req.params.id, function(err, course){
        if(err){
            console.log(err);
            res.redirect("/courses");
        } else {
            Lesson.create(req.body.lesson, function(err, lesson){
                if(err){
                    console.log(err);
                } else {
                    //save lesson
                    lesson.save();
                    course.lessons.push(lesson._id);
                    course.save();
                    res.redirect('/courses/' + course._id);
                }
            });
            
        }
    });
});

module.exports = router;