const express = require("express");
const bodyParser = require("body-parser");
const fileUpload = require('express-fileupload');
const path = require("path");

const router = require("./api/router");

const app = express();

app.use(fileUpload());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
 
// static files 
app.use("/static/", express.static(path.join(__dirname, '/public')));
app.use("/uploads/", express.static(path.join(__dirname, '/uploads')));

app.use(router);

// listen on a given port
app.listen(3000, function() {
    console.log("App listening at port 3000");
});