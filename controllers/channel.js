const Channel = require('../models/Channel');

exports.postChanel = (req, res, next) => {
    channelName = req.body.channelName;
    channelDetails = req.body.channelDetails;

    req.user.createChannel({
       name: channelName,
       description: channelDetails
    })
        .then(channel => {
            res.status(200)
                .json(channel)
        })
        .catch(err => {
            res.status(400)
                .json(err)
        })
};

exports.getChannels = ( req, res, next ) => {
    Channel.findAll()
        .then(channels => {
            res.status(200)
                .json(channels)
        })
        .catch(err => {
            res.status(400)
                .json(err)
        })
}
