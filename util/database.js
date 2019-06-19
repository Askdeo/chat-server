const Sequelize = require('sequelize');

const sequelize = new Sequelize('chat', 'root', 'avokado1', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;