const multer = require('multer');
const { v4 } = require('uuid');
const path = require('path/posix');

const volunterImageStorage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, './uploads/volunter');
	},
	filename: (req, file, cb) => {
		cb(null, `${v4()}${path.extname(file.originalname)}`);
	},
});

const childrenImageStorage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, './uploads/children');
	},
	filename: (req, file, cb) => {
		cb(null, `${v4()}${path.extname(file.originalname)}`);
	},
});

const volunterUpload = multer({ storage: volunterImageStorage });
const childrenUpload = multer({ storage: childrenImageStorage });

module.exports = { volunterUpload, childrenUpload };
