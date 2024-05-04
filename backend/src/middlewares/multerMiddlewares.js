// multerMiddlewares.js
import multer from "multer";
import path from "path";

// Set storage engine
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/data/uploads/'); // Destination folder for storing images
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname); // Set unique filename
  },
});

// Initialize multer upload
const upload = multer({ storage: storage }).single("image");

// Middleware function to handle image upload
const uploadImage = (req, res, next) => {
  upload(req, res, function (err) {
    if (err) {
      console.log(err);
      return res.status(400).json({ error: err.message });
    }
    // Remove the '/public' prefix from the image path before saving it in the database
   
    console.log("image uploaded successfully");
    next(); // Proceed to the next middleware
  });
};

export default uploadImage;
