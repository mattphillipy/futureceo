var express = require("express");
var router  = express.Router({mergeParams: true});
var Course = require("../models/course");
//var Comment= require("../models/comment");
var middleware = require("../middleware")

//Comments new
router.get("/new", function(req, res){
    // find campground by id
    console.log(req.params.id);
    Course.findById(req.params.id, function(err, course){
        if(err){
            console.log(err);
        } else {
            res.render("comments/new", {course: course});
        }
    });
});

router.post("/", function(req, res){
    //lookup campground using ID
     Course.findById(req.params.id, function(err, course){
        if(err){
            console.log(err);
            res.redirect("/courses");
        } else {
            Comment.create(req.body.comment, function(err, comment){
                if(err){
                    console.log(err);
                } else {
                    //save comment
                    comment.save();
                    course.comments.push(comment._id);
                    course.save();
                    res.redirect('/courses/' + course._id);
                }
            });
            
        }
    });
});

module.exports = router;