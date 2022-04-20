const { verify } = require('jsonwebtoken');

const verifiedUser = (req, res, next) => {
	const token = req.cookies['jwt-token'];
	if (!token) {
		return res.status(400).json({ error: 'User not Authenticated!' });
	}
	verify(token, 'TOKEN_SECRET', (err, payload) => {
		if (err) return res.status(400).json({ error: err });
		req.user = payload.id;
		next();
	});
};

module.exports = { verifiedUser };
