const express = require("express");
const path = require("path");
const { insertImage } = require("./controller");

const router = express.Router();

// render the map page
router.get("/", (req, res) => {
    res.sendFile(path.resolve('public/index.html'))
});

// post the images
router.post("/image", (req, res) => {
    // console.log(req.headers);

    console.log(req.files);
    console.log(req.body);

    // work on saving the images
    let imageData = {
        file:req.files.file,
        address:req.body.address
    };

    let message = insertImage(imageData);
    res.send(message);
});

module.exports = router;