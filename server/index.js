const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bcryptjs = require('bcryptjs');
const { db } = require('./config/dbConfig');
const { hash } = require('bcryptjs');
const { Users } = require('./models/Users');
const { createTokens } = require('./jwt');
const { verifiedUser } = require('./verifiedUser');
const {
	volunterStatus,
	addVolunter,
	getVolunterImage,
	getVolunters,
} = require('./handlers/volunterHandler');
const { volunterUpload, childrenUpload } = require('./imageUploader');
const {
	getChildImage,
	addChildren,
	getChildren,
} = require('./handlers/childrenHandler');

const app = express();
const PORT = 8000;

const unblockedSites = ['http://localhost:3000', 'http://127.0.0.1:3000'];
const corsConfiguration = {
	origin: (address, callback) => {
		if (!address) return callback(null, true);
		if (unblockedSites.indexOf(address) === -1) {
			return callback(new Error('Not allowed by CORS'), false);
		}
		return callback(null, true);
	},
	credentials: true,
};

app.use(express.json());
app.use(cookieParser());
app.use(cors(corsConfiguration));

app.get('/', (req, res) => {
	return res.json({
		message: `Server is listening at http://localhost:${PORT}`,
	});
});

app.get('/info', (req, res) => {
	return res.json({
		'db-dialect': 'mysql',
		'app-host': 'localhost',
		'server-port': PORT,
		'client-port': 3000,
	});
});

app.post('/register', async (req, res) => {
	const { username, email, password } = req.body;
	const hashPass = await hash(password, 10);
	try {
		await Users.create({
			username: username,
			email: email,
			password: hashPass,
			isAdmin: false,
		});
		return res.status(200).json({ message: 'user created' });
	} catch (err) {
		return res.status(400).json('Credentials not valid');
	}
});

app.post('/login', async (req, res) => {
	const { email, password } = req.body;
	console.log(email, '=>', password);
	const user = await Users.findOne({ where: { email: email } });
	if (!user) {
		return res.status(400).json({ error: 'user not found' });
	}
	console.log(user);

	const doesPasswordMatch = await bcryptjs.compare(password, user.password);
	if (!doesPasswordMatch) {
		return res.status(400).json({ error: 'passowrd does not matches' });
	}

	const token = createTokens(user.id);
	res.cookie('jwt-token', token, {
		httpOnly: true,
		maxAge: 86400000,
	});
	return res.status(200).json({ 'jwt-token': token });
});

app.get('/user', verifiedUser, async (req, res) => {
	const user = await Users.findOne({ where: { id: req.user } });
	if (!user) return res.status(400).json({ error: 'Unknown User Error' });
	return res.status(200).json(user);
});

app.get('/users', async (req, res) => {
	try {
		const data = await Users.findAll();
		return res.json(data);
	} catch (error) {
		console.log(error);
	}
});

app.get('/logout', verifiedUser, (req, res) => {
	res.clearCookie('jwt-token').send();
});

app.get('/private', (req, res) => {
	res.json({ message: 'private resource' });
});

//volunter status
app.get('/volunter/status', verifiedUser, volunterStatus);

//volunter add
const volunterImageAttributeName = volunterUpload.single('image');
app.post(
	'/volunter/add',
	volunterImageAttributeName,
	verifiedUser,
	addVolunter
);
app.get('/volunter/all', verifiedUser, getVolunters);
app.get('/children/all', verifiedUser, getChildren);

//volunter image (GET)
app.get('/volunter/image/:volunterId', getVolunterImage);

//children add
const childrenImageAttributeName = childrenUpload.single('image');
app.post(
	'/children/add',
	childrenImageAttributeName,
	verifiedUser,
	addChildren
);

//child image (GET)
app.get('/children/image/:childId', getChildImage);

//connecting to database
(async function () {
	try {
		await db.sync();
		await db.authenticate();
	} catch (error) {
		console.log('db not connected');
		console.log(error);
	}
})();

app.listen(PORT, () => {
	console.log(`server at http://localhost:${PORT}`);
});
