const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Message = sequelize.define('message', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    content:  {
        type: Sequelize.STRING,
        allowNull: true
    },
    imageUrl: {
        type: Sequelize.STRING,
        allowNull: true
    }
})

module.exports = Message;