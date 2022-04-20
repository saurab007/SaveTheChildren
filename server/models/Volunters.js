const { db } = require('../config/dbConfig');
const { DataTypes } = require('sequelize');

const Volunters = db.define('Volunters', {
	firstname: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	lastname: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	phone: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	address: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	bloodGroup: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	citizenship: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	occupation: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	image: {
		type: DataTypes.STRING,
		allowNull: false,
	},
});

module.exports = { Volunters };
