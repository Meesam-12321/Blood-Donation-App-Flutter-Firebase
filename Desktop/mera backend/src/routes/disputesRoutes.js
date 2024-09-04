const express = require('express');
const router = express.Router();
const disputesController = require('../controllers/disputesController');

/**
 * @swagger
 * /disputes:
 *   post:
 *     summary: Create a new dispute
 *     tags: [Disputes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ClaimID:
 *                 type: integer
 *               Dispute:
 *                 type: string
 *               Status:
 *                 type: string
 *               AdminID:
 *                 type: integer
 *             example:
 *               ClaimID: 1
 *               Dispute: "Issue with delivery"
 *               Status: "Pending"
 *               AdminID: 2
 *     responses:
 *       201:
 *         description: Dispute created successfully
 *       400:
 *         description: Invalid input, required fields are missing
 *       500:
 *         description: Server error
 */
router.post('/', disputesController.createDispute);

/**
 * @swagger
 * /disputes:
 *   get:
 *     summary: Get all disputes
 *     tags: [Disputes]
 *     responses:
 *       200:
 *         description: A list of disputes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Dispute'
 *       500:
 *         description: Server error
 */
router.get('/', disputesController.getAllDisputes);

/**
 * @swagger
 * /disputes/{id}:
 *   get:
 *     summary: Get a dispute by ID
 *     tags: [Disputes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Dispute ID
 *     responses:
 *       200:
 *         description: Dispute details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Dispute'
 *       404:
 *         description: Dispute not found
 *       500:
 *         description: Server error
 */
router.get('/:id', disputesController.getDisputeById);

/**
 * @swagger
 * /disputes/{id}:
 *   put:
 *     summary: Update a dispute by ID
 *     tags: [Disputes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Dispute ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ClaimID:
 *                 type: integer
 *               Dispute:
 *                 type: string
 *               Status:
 *                 type: string
 *               AdminID:
 *                 type: integer
 *             example:
 *               ClaimID: 1
 *               Dispute: "Issue with delivery"
 *               Status: "Resolved"
 *               AdminID: 2
 *     responses:
 *       200:
 *         description: Dispute updated successfully
 *       404:
 *         description: Dispute not found
 *       500:
 *         description: Server error
 */
router.put('/:id', disputesController.updateDispute);

/**
 * @swagger
 * /disputes/{id}:
 *   delete:
 *     summary: Delete a dispute by ID
 *     tags: [Disputes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Dispute ID
 *     responses:
 *       204:
 *         description: Dispute deleted successfully
 *       404:
 *         description: Dispute not found
 *       500:
 *         description: Server error
 */
router.delete('/:id', disputesController.deleteDispute);

module.exports = router;
