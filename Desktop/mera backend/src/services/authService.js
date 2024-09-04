const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');
const CustomError = require('../utils/CustomError');
const refreshTokenService = require('../services/refreshTokenService');
const { generateAccessToken, generateRefreshToken, verifyRefreshToken } = require('../utils/jwtUtils');


exports.createAdmin = async (email) => {
  // Generate password based on the email
  const username = email.split('@')[0]; // Extract username from email
  const password = `${username}123`; // Generate password by appending '123' to the username

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create the admin in the database
  const newAdmin = await Admin.create({
    Username: username,
    Password: hashedPassword,
    Email: email,
    Role: 'Admin', // Default role is Admin
  });

  return {
    username: newAdmin.Username,
    email: newAdmin.Email,
    password, // Return the generated password for display or further processing
  };
};

exports.loginAdmin = async (username, password) => {
  // Find the admin by username
  const admin = await Admin.findOne({ where: { Username: username } });

  if (!admin) {
    throw new CustomError('Invalid credentials', 401);
  }

  // Validate the password
  const isPasswordValid = await bcrypt.compare(password, admin.Password);

  if (!isPasswordValid) {
    throw new CustomError('Invalid credentials', 401);
  }

  // Generate a JWT token and refresh token
  const accessToken = generateAccessToken(admin);
  const refreshToken = generateRefreshToken(admin);

    // Store the refresh token in the database
  await refreshTokenService.createToken(refreshToken, admin.AdminID);

  return { accessToken, refreshToken };
};

exports.refreshToken = async (token) => {
  try {
    // Verify the refresh token
    const decoded = verifyRefreshToken(token);

    // Find the refresh token in the database
    await refreshTokenService.findToken(token);

    // Find the associated admin using the ID from the token
    const admin = await Admin.findByPk(decoded.id);

    if (!admin) {
      throw new CustomError('Admin not found', 404);
    }

    // Generate a new access token
    const newAccessToken = generateAccessToken(admin);

    return { newAccessToken };
  } catch (error) {
    console.error('Error refreshing token:', error.message);
    throw new CustomError('Error refreshing token', 500);
  }
};

exports.logoutAdmin = async (token) => {
  try {
    // Remove the refresh token from the database
    await refreshTokenService.deleteToken(token);
  } catch (error) {
    console.error('Error logging out:', error.message);
    throw new CustomError('Error logging out', 500);
  }
};