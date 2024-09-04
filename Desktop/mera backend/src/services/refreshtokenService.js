const RefreshToken = require('../models/RefreshTokens.js');
const CustomError = require('../utils/CustomError');

// Find a refresh token in the database
const findToken = async (token) => {
  const existingToken = await RefreshToken.findOne({ where: { token } });
  if (!existingToken) {
    throw new CustomError('Refresh token not found', 403);
  }
  return existingToken;
};

// Create a new refresh token in the database
const createToken = async (token, adminId) => {
  // Check if the token already exists
  const existingToken = await RefreshToken.findOne({ where: { token } });
  if (existingToken) {
    throw new CustomError('Refresh token already exists', 409);
  }

  // Create a new refresh token record
  await RefreshToken.create({ token, adminId });
};

// Delete a refresh token from the database
const deleteToken = async (token) => {
  const existingToken = await findToken(token);
  await existingToken.destroy();
};

module.exports = {
  findToken,
  createToken,
  deleteToken,
};
