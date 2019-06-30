const express = require('express');
const passport = require('passport');
const multer = require('multer');

const router = express.Router();

const imagesController = require('../controllers/images');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'images')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })



router.post('/image',
passport.authenticate('jwt', { session: false }),
upload.single('image'),
imagesController.postImage);


router.get('/images',
passport.authenticate('jwt', { session: false }),
imagesController.getImages);


module.exports = router;