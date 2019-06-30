const express = require('express');
const passport = require('passport');

const router = express.Router();

const profilesController = require('../controllers/profile');

// router.post('/message',
// passport.authenticate('jwt', { session: false }),
// messageController.postMessage);


router.get('/profiles',
passport.authenticate('jwt', { session: false }),
profilesController.getProfiles);


module.exports = router;