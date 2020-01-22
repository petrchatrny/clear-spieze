const express = require("express");
const app = express();
const port = 5000;
const router = express.Router();
const path = require("path");


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
  res.locals.title = "Koncerty";
  res.render("pages/concerts");
});

router.get("/albs", function(req, res){
  res.locals.title = "Alba";
  res.render("pages/albs");
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
