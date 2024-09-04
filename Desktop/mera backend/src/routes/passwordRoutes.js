const express = require('express');
const router = express.Router();
const passwordController = require('../controllers/passwordControllers');
const authenticateToken = require('../middleware/authenticateToken');

/**
 * @swagger
 * /password/change:
 *   post:
 *     summary: Change the password
 *     tags: [Password]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               oldPassword:
 *                 type: string
 *                 description: The current password
 *               newPassword:
 *                 type: string
 *                 description: The new password
 *             example:
 *               oldPassword: "oldPass123"
 *               newPassword: "newPass456"
 *     responses:
 *       200:
 *         description: Password changed successfully
 *       400:
 *         description: Invalid input
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server error
 */
router.post('/change', authenticateToken, passwordController.changePassword);

/**
 * @swagger
 * /password/forgot:
 *   get:
 *     summary: Initialize the password reset process and get the security question
 *     tags: [Password]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Security question fetched successfully
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server error
 */
router.get('/forgot', authenticateToken, passwordController.getQuestion);

/**
 * @swagger
 * /password/reset:
 *   post:
 *     summary: Reset the password using the answer to the security question
 *     tags: [Password]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               answer:
 *                 type: string
 *                 description: The answer to the security question
 *               newPassword:
 *                 type: string
 *                 description: The new password
 *             example:
 *               answer: "Blue"
 *               newPassword: "newPass456"
 *     responses:
 *       200:
 *         description: Password reset successfully
 *       400:
 *         description: Invalid input
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server error
 */
router.post('/reset', authenticateToken, passwordController.resetPassword);

module.exports = router;
