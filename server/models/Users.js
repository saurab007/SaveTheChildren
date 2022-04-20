const { db } = require('../config/dbConfig');
const { DataTypes } = require('sequelize');

const Users = db.define('Users', {
	username: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true,
	},
	email: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true,
	},
	password: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	isAdmin: {
		type: DataTypes.BOOLEAN,
		defaultValue: false,
	},
	isVolunter: {
		type: DataTypes.BOOLEAN,
		defaultValue: false,
	},
});

module.exports = { Users };
