// all the middleware goes here
var Course = require("../models/course");
// var Comment = require("../models/comment");
var Lesson = require("../models/lesson");
var middlewareObj = {};

middlewareObj.isLoggedIn = function(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    
    res.redirect("/login");
}

module.exports = middlewareObj

