const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const PrivateMessage = sequelize.define('private-message', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    content:  {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = PrivateMessage;