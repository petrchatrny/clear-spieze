const express = require("express");
const app = express();
const port = 5000;
const router = express.Router();
const path = require("path");
const mongoose = require("mongoose");

//DB------------------------------------------------------------------
mongoose.connect("mongodb://localhost:27017/Clearspieze", (error)=>{
  //check connection error
  if(!error){
    console.log("Success");
  }
  else{
    console.log("Error with connecting to database.");
  }
});
let db = mongoose.connection;

db.once("open", function(){
  console.log("Conntected to database");
});

//check db error
db.on("error", function(error){
  console.log(err);
});

let Alb = require("./models/alb");
let Concert = require("./models/concert")

//DB-END--------------------------------------------------------------------

// set the view engine to ejs
app.set("view engine", "ejs");

router.get("/", function(req, res){
  res.locals.title = "Clear Spieze";
  res.render("pages/index");
});

router.get("/about", function(req, res){
  res.locals.title = "O nás";
  res.render("pages/about");
});

router.get("/concerts", function(req, res){
  Concert.find({}, function(err, concerts){
    if(err){
      console.log(err);
    } else {
      res.locals.title = "Koncerty";
      res.render("pages/concerts", {concerts: concerts});
    }
  });
});

router.get("/albs", function(req, res){
  Alb.find({}, function(err, albs){
    if(err){
      console.log(err);
    } else {
      res.locals.title = "Alba";
      res.render("pages/albs", {albs: albs});
    }
  });
});

router.get("/gallery", function(req, res){
  res.locals.title = "Galerie";
  res.render("pages/gallery");
});

router.get("/contact", function(req, res){
  res.locals.title = "Kontakt";
  res.render("pages/contact");
});

//add the router
app.use("/", router);
app.use(express.static(__dirname + "/public"));
app.listen(port, () => console.log("App is listening on port: "+port));
