const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Profile = sequelize.define('profile', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    username: {
        type: Sequelize.STRING,
        allowNull: false
    },
    avatar: {
        type: Sequelize.STRING,
        allowNull: true
    },
    gender: {
        type: Sequelize.STRING,
        allowNull: true
    },
    age: {
        type: Sequelize.STRING,
        allowNull: true
    },
    interests:{
        type: Sequelize.STRING,
        allowNull: true
    }

})

module.exports = Profile;