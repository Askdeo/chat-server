const express = require('express');
const passport = require('passport');
const multer = require('multer');

const router = express.Router();

const messageController = require('../controllers/message');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'images')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })

router.post('/message',
passport.authenticate('jwt', { session: false }),
upload.single('image'),
messageController.postMessage);


router.get('/messages',
passport.authenticate('jwt', { session: false }),
messageController.getMessages);


module.exports = router;