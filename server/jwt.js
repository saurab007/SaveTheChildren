const { sign } = require('jsonwebtoken');

const createTokens = (id) => {
	const accessToken = sign({ id: id }, 'TOKEN_SECRET');

	return accessToken;
};

module.exports = { createTokens };
