const { Children } = require('../models/Children');
const { Users } = require('../models/Users');
const path = require('path/posix');

/** @type {import("express").RequestHandler} */
const addChildren = async (req, res) => {
	const { name, age, address, description } = req.body;
	const image = req.file.filename;
	try {
		const user = await Users.findOne({ where: { id: req.user } });
		if (!user) {
			return res.status(400).json({ error: 'user not found' });
		}
		if (user.isVolunter === true) {
			await Children.create({
				name: name,
				age: age,
				address: address,
				description: description,
				image: image,
			});
			return res.status(200).json({ message: 'successfully uploaded' });
		}
		return res.status(200).json({ status: 'not a volunter' });
	} catch (error) {
		console.log(error);
		return res.status(500).json({ error: 'Internal Error Occured' });
	}
};

/** @type {import("express").RequestHandler} */
const getChildImage = async (req, res) => {
	const { childId } = req.params;
	try {
		const child = await Children.findOne({ where: { id: childId } });
		if (!child) return res.status(404).json({ error: 'volunter not found' });
		console.log(child);
		const filePath = path.resolve(
			__dirname + '/../uploads/children/' + child.image
		);
		return res.sendFile(filePath);
	} catch (error) {
		console.log(error);
		return res.status(500).json({ error: `Internal Error Occured` });
	}
};

/** @type {import("express").RequestHandler} */
const getChildren = async (req, res) => {
	try {
		const children = await Children.findAll();
		return res.status(200).json(children);
	} catch (error) {
		return res.status(500).json({ error: 'Internal Error Occured' });
	}
};

module.exports = { addChildren, getChildImage, getChildren };
