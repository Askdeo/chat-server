const express = require('express');
const passport = require('passport');

const router = express.Router();

const channelController = require('../controllers/channel');

router.get('/channels',
passport.authenticate('jwt', { session: false }),
channelController.getChannels);

router.post('/channel',
passport.authenticate('jwt', { session: false }),
channelController.postChanel);

// router.get('/channel',
// passport.authenticate('jwt', { session: false }),
// channelController.getCurrentChanel);

module.exports = router;