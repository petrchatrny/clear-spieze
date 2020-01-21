const express = require("express");
const app = express();
const port = 8000;
const router = express.Router();
const path = require('path');

app.set('view engine', 'ejs');

router.get("/", function(req, res) {
    res.render('pages/index');
});

router.get("/about", function(req, res) {
    res.render('pages/about');
});

app.use("/", router)
app.listen(port, () => console.log("App is listening on port: " + port ));
