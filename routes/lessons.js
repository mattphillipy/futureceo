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

//CREATE LESSONS ROUTE
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

// EDIT LESSONS ROUTE
router.get("/:lesson_id/edit", function(req, res){
   Lesson.findById(req.params.lesson_id, function(err, foundLesson){
       if(err){
           res.redirect("back");
       } else {
           res.render("lessons/edit", {course_id: req.params.id, lesson: foundLesson});
       }
   })
   
});

//UPDATE LESSONS ROUTE
router.put("/:lesson_id", function(req, res){
    Lesson.findByIdAndUpdate(req.params.lesson_id, req.body.lesson, function(err, updatedLesson){
        if(err){
            res.redirect("back");
        } else {
            res.redirect("/courses/" + req.params.id);
        }
    });
});

module.exports = router;