const express = require('express');
const router = express.Router();
const potentialCustomerController = require('../controllers/potentialCustomerController');

/**
 * @swagger
 * /potentialCustomer/add:
 *   post:
 *     summary: Add a new potential customer
 *     tags: [PotentialCustomer]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               MemberID:
 *                 type: string
 *               Name:
 *                 type: string
 *               MedicaidID:
 *                 type: string
 *               Phone:
 *                 type: string
 *               Address:
 *                 type: string
 *               DeliveryNote:
 *                 type: string
 *               PreferredDeliveryTime:
 *                 type: string
 *               AlternateContactName:
 *                 type: string
 *               AlternateContactPhone:
 *                 type: string
 *               AlternateContactAddress:
 *                 type: string
 *               Allergies:
 *                 type: string
 *               MemberDOB:
 *                 type: string
 *                 format: date
 *               Status:
 *                 type: string
 *               Note:
 *                 type: string
 *             example:
 *               MemberID: "123456"
 *               Name: "John Doe"
 *               MedicaidID: "123456789"
 *               Phone: "1234567890"
 *               Address: "123 Street Name"
 *               DeliveryNote: "Leave at the front door"
 *               PreferredDeliveryTime: "10:00 AM"
 *               AlternateContactName: "Jane Doe"
 *               AlternateContactPhone: "0987654321"
 *               AlternateContactAddress: "456 Another St"
 *               Allergies: "None"
 *               MemberDOB: "1980-01-01"
 *               Status: "Pending Approval"
 *               Note: "Requires special attention"
 *     responses:
 *       201:
 *         description: Potential customer added successfully
 *       400:
 *         description: Invalid input, required fields are missing
 *       500:
 *         description: Server error
 */
router.post('/add', potentialCustomerController.addPotentialCustomer);

/**
 * @swagger
 * /potentialCustomer/all:
 *   get:
 *     summary: Get all potential customers
 *     tags: [PotentialCustomer]
 *     responses:
 *       200:
 *         description: A list of potential customers
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/PotentialCustomer'
 *       500:
 *         description: Server error
 */
router.get('/all', potentialCustomerController.getAllPotentialCustomers);

/**
 * @swagger
 * /potentialCustomer/approve/{PotentialCustomerID}:
 *   post:
 *     summary: Approve a potential customer
 *     tags: [PotentialCustomer]
 *     parameters:
 *       - in: path
 *         name: PotentialCustomerID
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the potential customer to approve
 *     responses:
 *       200:
 *         description: Potential customer approved and moved to customers
 *       404:
 *         description: Potential customer not found
 *       500:
 *         description: Server error
 */
router.post('/approve/:PotentialCustomerID', potentialCustomerController.approvePotentialCustomer);

/**
 * @swagger
 * /potentialCustomer/reject/{PotentialCustomerID}:
 *   post:
 *     summary: Reject a potential customer
 *     tags: [PotentialCustomer]
 *     parameters:
 *       - in: path
 *         name: PotentialCustomerID
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the potential customer to reject
 *     responses:
 *       200:
 *         description: Potential customer rejected and removed
 *       404:
 *         description: Potential customer not found
 *       500:
 *         description: Server error
 */
router.post('/reject/:PotentialCustomerID', potentialCustomerController.rejectPotentialCustomer);

module.exports = router;
