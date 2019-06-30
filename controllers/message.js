
const Message = require('../models/Message');
const Profile = require('../models/Profile');

exports.postMessage = ( req, res, next ) => {
    let imageUrl;
    if(req.file){imageUrl = req.file.path};
    const content = req.body.content;
    const channelId = req.body.channelId;

    Profile.findOne({ where: {userId: req.user.id } })
        .then(profile => {
            req.user.createMessage({
                channelId: channelId,
                content: content,
                imageUrl: imageUrl,
                profileId: profile.id
            })
                .then(message => {
                    res.status(200)
                        .json(message)
                })
        })
    .catch(err => {
        res.status(400)
            .json(err)
    })
};

exports.getMessages = ( req, res, next ) => {
    Message.findAll()
        .then(messages => {
            res.status(200)
                .json(messages)
        })
        .catch(err => {
            res.status(400)
                .json(err)
        })
}