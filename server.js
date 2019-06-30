const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const passport = require('passport');

const User = require('./models/User');
const Profile = require('./models/Profile');
const Channel = require('./models/Channel');
const Message = require('./models/Message');
const PrivateMessage = require('./models/PrivateMessage');

const usersRoutes = require('./routes/users')
const channelRoutes = require('./routes/channels')
const messageRoutes = require('./routes/message');
const profileRoutes = require('./routes/profiles');
// const privateMessageRoutes

const app = express();



  // app.use(bodyParser.urlencoded()); // x-www-form-urlencoded <form>
  app.use(bodyParser.json()); // application/json
  app.use('/images', express.static(path.join(__dirname, 'images')));
  
  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Methods',
      'OPTIONS, GET, POST, PUT, PATCH, DELETE'
    );
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });

// Passport middleware
app.use(passport.initialize());

// Passport Config
require('./util/passport')(passport);

// Use Routes
app.use('/', usersRoutes);
app.use('/', channelRoutes);
app.use('/', messageRoutes);
app.use('/', profileRoutes);

User.hasOne(Profile);
User.hasMany(Channel);
User.hasMany(Message);
Profile.hasMany(Message);
User.hasMany(PrivateMessage);
Channel.hasMany(Message);


const port = 5000;

app.listen(port);