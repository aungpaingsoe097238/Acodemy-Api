const fs = require("fs");

const uploadFile = (req, res, next) => {
  if (req.files) {
    const files = req.files.images;
    const filename = new Date().valueOf() + "_" + files.name;
    files.mv(`./public/uploads/${filename}`);
    req.image = filename;
    next();
  } else {
    next();
  }
};

const deleteFile = (filename) => {
    fs.unlinkSync(`./public/uploads/${filename}`);
  };
  

module.exports = { deleteFile, uploadFile };
