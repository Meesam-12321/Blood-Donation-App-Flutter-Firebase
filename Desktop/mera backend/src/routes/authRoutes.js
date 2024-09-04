const express = require('express');
const authController = require('../controllers/authController');
const authenticateToken = require('../middleware/authenticateToken');
const rbac = require('../middleware/rbacMiddleware');
const router = express.Router();

/**
 * @swagger
 * /auth/create-admin:
 *   post:
 *     summary: Create a new admin
 *     security:
 *       - BearerAuth: []
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *             example:
 *               email: "admin@example.com"
 *     responses:
 *       201:
 *         description: Admin created successfully
 *       400:
 *         description: Invalid input, email is required
 *       500:
 *         description: Server error
 */
router.post('/create-admin', authenticateToken, rbac('Super Admin'), authController.createAdmin);

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Login an admin
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *             example:
 *               username: "adminuser"
 *               password: "password123"
 *     responses:
 *       200:
 *         description: Login successful, returns access and refresh tokens
 *       400:
 *         description: Invalid input, username and password are required
 *       401:
 *         description: Invalid credentials
 *       500:
 *         description: Server error
 */
router.post('/login', authController.loginAdmin);

/**
 * @swagger
 * /auth/refreshtoken:
 *   post:
 *     summary: Refresh access token
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               refreshToken:
 *                 type: string
 *             example:
 *               refreshToken: "your-refresh-token-here"
 *     responses:
 *       200:
 *         description: Token refreshed successfully
 *       400:
 *         description: Refresh token is required
 *       500:
 *         description: Server error
 */
router.post('/refreshtoken', authController.refreshToken);

/**
 * @swagger
 * /auth/logout:
 *   post:
 *     summary: Logout an admin
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               refreshToken:
 *                 type: string
 *             example:
 *               refreshToken: "your-refresh-token-here"
 *     responses:
 *       200:
 *         description: Logout successful
 *       400:
 *         description: Refresh token is required
 *       500:
 *         description: Server error
 */
router.post('/logout', authController.logoutAdmin);

module.exports = router;
