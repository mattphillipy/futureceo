var mongoose = require("mongoose");
var Course = require("./models/course");
var Lesson = require("./models/lesson");

var data = [
    {
        name: "Amazon Web Services",
        category: "Cloud",
        series: "Real World MBA",
        image: "https://s3.amazonaws.com/futureceo.io/Media/Courses/AWS+Dashboard.PNG",
        description:"Free basics of Amazon Web Services!"
    },
    {
        name: "Excel Power Pivot",
        category: "Data",
        series: "Real World MBA",
        image: "https://s3.amazonaws.com/futureceo.io/Media/Courses/Excel+Image.PNG",
        description:"Learn Modern Excel! "
    },
    
]

function seedDB(){
    Course.remove({}, function(err){
        if(err){
            console.log(err);
        } else
        console.log("removed courses!");
        //add a few courses
        data.forEach(function(seed){
            Course.create(seed, function(err, course){
                if(err){
                    console.log(err)
                } else {
                    console.log("added a course");
                    //create a comment
                    Lesson.create(
                        {
                            text: "seed lesson #1"
                           
                        }, function(err, lesson){
                            if(err){
                                console.log(err);
                            } else {
                                lesson.save();
                                course.lessons.push(lesson._id);
                                course.save();
                                console.log("new comment created!");
                            }
                            
                        });
                }
            });
        });
    });
    
   
}

module.exports = seedDB;