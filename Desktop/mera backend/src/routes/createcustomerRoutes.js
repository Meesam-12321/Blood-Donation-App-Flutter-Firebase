const express = require('express');
const router = express.Router();
const createCustomerController = require('../controllers/finalizecustomerController');

/**
 * @swagger
 * /createcustomer/generatecredentials:
 *   post:
 *     summary: Generate credentials for a new customer
 *     tags: [Create Customer]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               potentialCustomerID:
 *                 type: integer
 *                 description: ID of the potential customer to generate credentials for
 *             example:
 *               potentialCustomerID: 1
 *     responses:
 *       201:
 *         description: Credentials generated successfully
 *       404:
 *         description: Potential customer not found
 *       405:
 *         description: Potential customer data incomplete
 *       500:
 *         description: Server error
 */
router.post('/generatecredentials', createCustomerController.generateCredentials);

module.exports = router;
