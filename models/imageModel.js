const connection = require("../db");

const ImageModel = function(image) {
    this.path = image.path;
    this.address = image.address;
};

ImageModel.addImage = function(image, result) {
    connection.query("INSERT INTO images SET?", image, function(err, response) {
        if(err) throw err;

        return result(null, response);
    });
}

module.exports = ImageModel;