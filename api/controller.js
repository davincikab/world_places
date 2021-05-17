const ImageModel = require("../models/imageModel");
const { v4: uuidv4 } = require('uuid');

 function insertImage(imageData) {
    let image = imageData.file;

    let fileName = uuidv4();
    let extension = image.mimetype.split("/")[1];
    let path = './uploads/' + fileName + '.' + extension;

    imageData.file.mv(path, function(err, response) {
        if(err) throw err;

        // commit image file
        let imageModel = new ImageModel({
            path:path,
            address:imageData.address,
        });

        ImageModel.addImage(imageModel, function(err, response) {
            if(err) throw err;

            return {msg:"Home coming"};
        });
    });
}

module.exports = { insertImage }