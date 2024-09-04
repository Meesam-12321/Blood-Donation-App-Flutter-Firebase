const express = require('express');
const claimsController = require('../controllers/claimsController');
const router = express.Router();

/**
 * @swagger
 * /claims:
 *   post:
 *     summary: Create a new claim
 *     tags: [Claims]
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
 *               ClaimDate:
 *                 type: string
 *                 format: date
 *               Facility:
 *                 type: string
 *               UnitPrice:
 *                 type: integer
 *               Units:
 *                 type: integer
 *               Days:
 *                 type: integer
 *               BilledAmount:
 *                 type: integer
 *               BillDate:
 *                 type: string
 *                 format: date
 *               BillStatus:
 *                 type: string
 *               AllowedAmount:
 *                 type: integer
 *               PaidAmount:
 *                 type: integer
 *               PaymentDate:
 *                 type: string
 *                 format: date
 *               CheckNo:
 *                 type: string
 *             example:
 *               CustomerID: 1
 *               OrderID: 123
 *               ClaimDate: "2024-08-25"
 *               Facility: "Main Hospital"
 *               UnitPrice: 500
 *               Units: 3
 *               Days: 2
 *               BilledAmount: 3000
 *               BillDate: "2024-08-25"
 *               BillStatus: "Pending"
 *               AllowedAmount: 2800
 *               PaidAmount: 2800
 *               PaymentDate: "2024-08-26"
 *               CheckNo: "CHK123456"
 *     responses:
 *       201:
 *         description: Claim created successfully
 *       400:
 *         description: Invalid input, required fields are missing
 *       500:
 *         description: Server error
 */
router.post('/', claimsController.createClaim);

/**
 * @swagger
 * /claims:
 *   get:
 *     summary: Get all claims
 *     tags: [Claims]
 *     responses:
 *       200:
 *         description: A list of claims
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Claims'
 *       500:
 *         description: Server error
 */
router.get('/', claimsController.getAllClaims);

/**
 * @swagger
 * /claims/{id}:
 *   get:
 *     summary: Get a claim by ID
 *     tags: [Claims]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Claim ID
 *     responses:
 *       200:
 *         description: Claim details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Claims'
 *       404:
 *         description: Claim not found
 *       500:
 *         description: Server error
 */
router.get('/:id', claimsController.getClaimById);

/**
 * @swagger
 * /claims/{id}:
 *   put:
 *     summary: Update a claim by ID
 *     tags: [Claims]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Claim ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Facility:
 *                 type: string
 *               BillStatus:
 *                 type: string
 *               PaidAmount:
 *                 type: integer
 *               PaymentDate:
 *                 type: string
 *                 format: date
 *             example:
 *               Facility: "Main Hospital Updated"
 *               BillStatus: "Paid"
 *               PaidAmount: 3000
 *               PaymentDate: "2024-08-27"
 *     responses:
 *       200:
 *         description: Claim updated successfully
 *       404:
 *         description: Claim not found
 *       500:
 *         description: Server error
 */
router.put('/:id', claimsController.updateClaim);

/**
 * @swagger
 * /claims/{id}:
 *   delete:
 *     summary: Delete a claim by ID
 *     tags: [Claims]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Claim ID
 *     responses:
 *       204:
 *         description: Claim deleted successfully
 *       404:
 *         description: Claim not found
 *       500:
 *         description: Server error
 */
router.delete('/:id', claimsController.deleteClaim);

module.exports = router;
