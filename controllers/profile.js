const Profile = require('../models/Profile');

exports.getProfiles = ( req, res, next ) => {
    Profile.findAll()
        .then(profiles => {
            res.status(200)
                .json(profiles)
        })
        .catch(err => {
            res.status(400)
                .json(err)
        })
}

