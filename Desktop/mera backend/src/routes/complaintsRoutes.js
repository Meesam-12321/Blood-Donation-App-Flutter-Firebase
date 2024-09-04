const express = require('express');
const router = express.Router();
const complaintsController = require('../controllers/complaintsController');

/**
 * @swagger
 * /complaints:
 *   post:
 *     summary: Create a new complaint
 *     tags: [Complaints]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               CustomerID:
 *                 type: integer
 *               OrderID:
 *                 type: integer
 *               ComplaintDescription:
 *                 type: string
 *               ComplaintStatus:
 *                 type: string
 *               ComplaintDateTime:
 *                 type: string
 *                 format: date-time
 *               ComplaintResolveDateTime:
 *                 type: string
 *                 format: date-time
 *               AdminID:
 *                 type: integer
 *             example:
 *               CustomerID: 1
 *               OrderID: 123
 *               ComplaintDescription: "Received wrong order"
 *               ComplaintStatus: "Pending"
 *               ComplaintDateTime: "2024-08-25T10:00:00Z"
 *               ComplaintResolveDateTime: "2024-08-26T12:00:00Z"
 *               AdminID: 2
 *     responses:
 *       201:
 *         description: Complaint created successfully
 *       400:
 *         description: Invalid input, required fields are missing
 *       500:
 *         description: Server error
 */
router.post('/', complaintsController.createComplaint);

/**
 * @swagger
 * /complaints:
 *   get:
 *     summary: Get all complaints
 *     tags: [Complaints]
 *     responses:
 *       200:
 *         description: A list of complaints
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Complaints'
 *       500:
 *         description: Server error
 */
router.get('/', complaintsController.getAllComplaints);

/**
 * @swagger
 * /complaints/{id}:
 *   get:
 *     summary: Get a complaint by ID
 *     tags: [Complaints]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Complaint ID
 *     responses:
 *       200:
 *         description: Complaint details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Complaints'
 *       404:
 *         description: Complaint not found
 *       500:
 *         description: Server error
 */
router.get('/:id', complaintsController.getComplaintById);

/**
 * @swagger
 * /complaints/{id}:
 *   put:
 *     summary: Update a complaint by ID
 *     tags: [Complaints]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Complaint ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ComplaintStatus:
 *                 type: string
 *               ComplaintResolveDateTime:
 *                 type: string
 *                 format: date-time
 *             example:
 *               ComplaintStatus: "Resolved"
 *               ComplaintResolveDateTime: "2024-08-26T15:00:00Z"
 *     responses:
 *       200:
 *         description: Complaint updated successfully
 *       404:
 *         description: Complaint not found
 *       500:
 *         description: Server error
 */
router.put('/:id', complaintsController.updateComplaint);

/**
 * @swagger
 * /complaints/{id}:
 *   delete:
 *     summary: Delete a complaint by ID
 *     tags: [Complaints]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Complaint ID
 *     responses:
 *       204:
 *         description: Complaint deleted successfully
 *       404:
 *         description: Complaint not found
 *       500:
 *         description: Server error
 */
router.delete('/:id', complaintsController.deleteComplaint);

module.exports = router;
