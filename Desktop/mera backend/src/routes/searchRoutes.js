const express = require('express');
const router = express.Router();
const searchController = require('../controllers/searchController');
const authenticateToken = require('../middleware/authenticateToken');
const rbac = require('../middleware/rbacMiddleware');

/**
 * @swagger
 * /searchcustomer:
 *   post:
 *     summary: Search and filter customers
 *     tags: [Search]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               search:
 *                 type: string
 *                 description: The search term to filter customers by name
 *               filter:
 *                 type: string
 *                 description: An additional filter for customer names
 *             example:
 *               search: "john"
 *               filter: "Doe"
 *     responses:
 *       200:
 *         description: A list of filtered customers
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   CustomerID:
 *                     type: integer
 *                   Name:
 *                     type: string
 *                   Phone:
 *                     type: string
 *                   Email:
 *                     type: string
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server error
 */
router.post('/searchcustomer', authenticateToken, rbac('Admin'), searchController.renderHomePage);

module.exports = router;
