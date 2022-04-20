const { Sequelize } = require('sequelize');

const db = new Sequelize({
    database: 'save_the_children',
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',

});

module.exports = { db };