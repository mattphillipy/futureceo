var express = require("express");
var router = express.Router();
var passport = require("passport");
var User = require("../models/user");

//root route
router.get("/", function(req, res){
    res.render("landing");
});


// show register form
router.get("/register", function(req,res){
   res.render("register");
});

//handle sign up logic
router.post("/register", function(req, res){
    var username = req.body.username;
    var newUser = new User({username: username});
    User.register(newUser, req.body.password, function(err, user){
        if(err){
            
            return res.redirect("/");
        }
        passport.authenticate("local")(req, res, function(){
            
            res.redirect("/courses");
        });
    });
});

// show login form
router.get("/login", function(req, res){
    res.render("login");
});

// handling login logic
router.post("/login", passport.authenticate("local", 
    {
    successRedirect: "/courses",
    failureRedirect: "/"
    }), function(req, res){
});

//logout route
router.get("/logout", function(req, res){
    req.logout();    
    
    res.redirect("/");
});


module.exports = router;