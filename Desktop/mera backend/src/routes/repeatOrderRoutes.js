const express = require('express');
const router = express.Router();
const repeatOrderController = require('../controllers/repeatOrderController');

/**
 * @swagger
 * /repeatorders:
 *   post:
 *     summary: Create a new repeat order
 *     tags: [RepeatOrder]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               CustomerID:
 *                 type: integer
 *               DishID:
 *                 type: integer
 *               VendorID:
 *                 type: integer
 *               MenuID:
 *                 type: integer
 *               Status:
 *                 type: string
 *             example:
 *               CustomerID: 1
 *               DishID: 101
 *               VendorID: 202
 *               MenuID: 303
 *               Status: "Scheduled"
 *     responses:
 *       201:
 *         description: Repeat order created successfully
 *       400:
 *         description: Invalid input, required fields are missing
 *       500:
 *         description: Server error
 */
router.post('/', repeatOrderController.createRepeatOrder);

/**
 * @swagger
 * /repeatorders:
 *   get:
 *     summary: Get all repeat orders
 *     tags: [RepeatOrder]
 *     responses:
 *       200:
 *         description: A list of repeat orders
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/RepeatOrder'
 *       500:
 *         description: Server error
 */
router.get('/', repeatOrderController.getAllRepeatOrders);

/**
 * @swagger
 * /repeatorders/{id}:
 *   get:
 *     summary: Get a repeat order by ID
 *     tags: [RepeatOrder]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Repeat order ID
 *     responses:
 *       200:
 *         description: Repeat order details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/RepeatOrder'
 *       404:
 *         description: Repeat order not found
 *       500:
 *         description: Server error
 */
router.get('/:id', repeatOrderController.getRepeatOrderById);

/**
 * @swagger
 * /repeatorders/{id}:
 *   put:
 *     summary: Update a repeat order by ID
 *     tags: [RepeatOrder]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Repeat order ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               CustomerID:
 *                 type: integer
 *               DishID:
 *                 type: integer
 *               VendorID:
 *                 type: integer
 *               MenuID:
 *                 type: integer
 *               Status:
 *                 type: string
 *     responses:
 *       200:
 *         description: Repeat order updated successfully
 *       404:
 *         description: Repeat order not found
 *       500:
 *         description: Server error
 */
router.put('/:id', repeatOrderController.updateRepeatOrder);

/**
 * @swagger
 * /repeatorders/{id}:
 *   delete:
 *     summary: Delete a repeat order by ID
 *     tags: [RepeatOrder]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Repeat order ID
 *     responses:
 *       204:
 *         description: Repeat order deleted successfully
 *       404:
 *         description: Repeat order not found
 *       500:
 *         description: Server error
 */
router.delete('/:id', repeatOrderController.deleteRepeatOrder);

module.exports = router;
