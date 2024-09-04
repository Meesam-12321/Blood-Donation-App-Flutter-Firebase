const express = require('express');
const router = express.Router();
const formintakeController = require('../controllers/formintakeController.js');
const authenticateToken = require('../middleware/authenticateToken');
const PotentialCustomers = require('../models/PotentialCustomer');

/**
 * @swagger
 * /getallpotentialcustomers:
 *   get:
 *     summary: Retrieve a list of all potential customers.
 *     tags: [PotentialCustomers]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: A list of potential customers.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: The customer ID.
 *                   name:
 *                     type: string
 *                     description: The name of the customer.
 *                   status:
 *                     type: string
 *                     description: The status of the customer.
 *       500:
 *         description: Error fetching potential customers.
 */
router.get('/getallpotentialcustomers', authenticateToken, formintakeController.getAllPotentialCustomers);

/**
 * @swagger
 * /formdata:
 *   post:
 *     summary: Submit form data for a customer.
 *     tags: [FormData]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               potentialcustomerID:
 *                 type: integer
 *                 description: ID of the potential customer.
 *               address:
 *                 type: string
 *                 description: Address of the customer.
 *               preferreddt:
 *                 type: string
 *                 description: Preferred delivery time.
 *               delinerynote:
 *                 type: string
 *                 description: Delivery note.
 *               alternatecn:
 *                 type: string
 *                 description: Alternate contact name.
 *               alternatecp:
 *                 type: string
 *                 description: Alternate contact phone.
 *               alternateca:
 *                 type: string
 *                 description: Alternate contact address.
 *               allergies:
 *                 type: string
 *                 description: Allergies of the customer.
 *     responses:
 *       200:
 *         description: Form received successfully.
 *       400:
 *         description: Invalid request body.
 */
router.post('/formdata', (req, res) => {
    console.log('Received request:', req.body);
    res.status(200).json({ message: 'Form received successfully' });
});

module.exports = router;
