const express = require('express');
const router = express.Router();
const insuranceController = require('../controllers/insuranceController');

/**
 * @swagger
 * /insurance:
 *   post:
 *     summary: Create a new insurance entry
 *     tags: [Insurance]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               AuthUnitsApproved:
 *                 type: integer
 *               CPT:
 *                 type: string
 *               Frequency:
 *                 type: string
 *               Note:
 *                 type: string
 *             example:
 *               AuthUnitsApproved: 20
 *               CPT: "12345"
 *               Frequency: "Weekly"
 *               Note: "Coverage for therapy sessions"
 *     responses:
 *       201:
 *         description: Insurance created successfully
 *       400:
 *         description: Invalid input, required fields are missing
 *       500:
 *         description: Server error
 */
router.post('/', insuranceController.createInsurance);

/**
 * @swagger
 * /insurance:
 *   get:
 *     summary: Get all insurance entries
 *     tags: [Insurance]
 *     responses:
 *       200:
 *         description: A list of insurance entries
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Insurance'
 *       500:
 *         description: Server error
 */
router.get('/', insuranceController.getAllInsurance);

/**
 * @swagger
 * /insurance/{id}:
 *   get:
 *     summary: Get an insurance entry by ID
 *     tags: [Insurance]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Insurance ID
 *     responses:
 *       200:
 *         description: Insurance entry details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Insurance'
 *       404:
 *         description: Insurance entry not found
 *       500:
 *         description: Server error
 */
router.get('/:id', insuranceController.getInsuranceById);

/**
 * @swagger
 * /insurance/{id}:
 *   put:
 *     summary: Update an insurance entry by ID
 *     tags: [Insurance]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Insurance ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               AuthUnitsApproved:
 *                 type: integer
 *               CPT:
 *                 type: string
 *               Frequency:
 *                 type: string
 *               Note:
 *                 type: string
 *             example:
 *               AuthUnitsApproved: 25
 *               CPT: "67890"
 *               Frequency: "Monthly"
 *               Note: "Coverage for extended therapy sessions"
 *     responses:
 *       200:
 *         description: Insurance entry updated successfully
 *       404:
 *         description: Insurance entry not found
 *       500:
 *         description: Server error
 */
router.put('/:id', insuranceController.updateInsurance);

/**
 * @swagger
 * /insurance/{id}:
 *   delete:
 *     summary: Delete an insurance entry by ID
 *     tags: [Insurance]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Insurance ID
 *     responses:
 *       204:
 *         description: Insurance entry deleted successfully
 *       404:
 *         description: Insurance entry not found
 *       500:
 *         description: Server error
 */
router.delete('/:id', insuranceController.deleteInsurance);

module.exports = router;
