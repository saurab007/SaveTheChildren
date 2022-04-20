const { Users } = require('../models/Users');
const { Volunters } = require('../models/Volunters');
const path = require('path/posix');

/** @type {import("express").RequestHandler} */
const addVolunter = async (req, res) => {
	const {
		firstname,
		lastname,
		address,
		phone,
		bloodGroup,
		citizenship,
		occupation,
	} = req.body;
	const image = req.file.filename;
	try {
		const user = await Users.findOne({ where: { id: req.user } });
		if (!user) {
			return res.status(400).json({ error: 'user not found' });
		}
		if (user.isVolunter) {
			return res.status(200).json({ status: 'already a volunter' });
		}
		await Volunters.create({
			firstname: firstname,
			lastname: lastname,
			phone: phone,
			address: address,
			bloodGroup: bloodGroup,
			citizenship: citizenship,
			occupation: occupation,
			image: image,
		});
		await Users.update({ isVolunter: true }, { where: { id: user.id } });
		return res.status(200).json({ message: 'successfully uploaded' });
	} catch (error) {
		console.log(error);
	}
};

/** @type {import("express").RequestHandler} */
const volunterStatus = async (req, res) => {
	const user = await Users.findOne({ where: { id: req.user } });
	if (!user) {
		return res.status(400).json({ error: 'user not found' });
	}
	if (user.isVolunter) {
		return res.status(200).json({ volunter_status: true });
	}
	return res.status(200).json({ volunter_status: false });
};

/** @type {import("express").RequestHandler} */
const getVolunterImage = async (req, res) => {
	const { volunterId } = req.params;
	try {
		const volunter = await Volunters.findOne({ where: { id: volunterId } });
		if (!volunter) return res.status(404).json({ error: 'volunter not found' });
		const filePath = path.resolve(
			__dirname + '/../uploads/volunter/' + volunter.image
		);
		return res.sendFile(filePath);
	} catch (error) {
		console.log(error);
		return res.status(500).json({ error: `Internal Error Occured` });
	}
};

/** @type {import("express").RequestHandler} */
const getVolunters = async (req, res) => {
	try {
		const volunters = await Volunters.findAll();
		return res.status(200).json(volunters);
	} catch (error) {
		return res.status(500).json({ error: 'Internal Error Occured' });
	}
};

module.exports = {
	volunterStatus,
	addVolunter,
	getVolunterImage,
	getVolunters,
};
