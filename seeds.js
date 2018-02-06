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
    // {
    //     name: "Kalaloch",
    //     image: "http://nwtripfinder.com/wp-content/uploads/2011/05/kalalochbeach.jpg",
    //     description:"It was the year of Our Lord one thousand seven hundred and seventy-five. Spiritual revelations were conceded to England at that favoured period, as at this. Mrs. Southcott had recently attained her five-and-twentieth blessed birthday, of whom a prophetic private in the Life Guards had heralded the sublime appearance by announcing that arrangements were made for the swallowing up of London and Westminster."
    // }
]


function seedDB(){
    Course.remove({}, function(err){
        if(err){
            console.log(err);
        } else
        console.log("removed courses!");
        //add a few campgrounds
        data.forEach(function(seed){
            Course.create(seed, function(err, course){
                if(err){
                    console.log(err)
                } else {
                    console.log("added a course");
                    
                }
            });
        });
    });
    
    
}

module.exports = seedDB;