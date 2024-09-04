const express = require('express');
const router = express.Router();
const ordersController = require('../controllers/ordersController');

/**
 * @swagger
 * /orders:
 *   post:
 *     summary: Create a new order
 *     tags: [Orders]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               CustomerID:
 *                 type: integer
 *               DishIDsList:
 *                 type: string
 *               OrderInstructions:
 *                 type: string
 *               OrderCost:
 *                 type: integer
 *               OrderPlaceDateTime:
 *                 type: string
 *                 format: date-time
 *               OrderCompleteDateTime:
 *                 type: string
 *                 format: date-time
 *               Status:
 *                 type: string
 *             example:
 *               CustomerID: 1
 *               DishIDsList: "1,2,3"
 *               OrderInstructions: "No onions"
 *               OrderCost: 150
 *               OrderPlaceDateTime: "2024-08-25T14:00:00Z"
 *               OrderCompleteDateTime: "2024-08-25T15:00:00Z"
 *               Status: "Completed"
 *     responses:
 *       201:
 *         description: Order created successfully
 *       400:
 *         description: Invalid input, required fields are missing
 *       500:
 *         description: Server error
 */
router.post('/', ordersController.createOrder);

/**
 * @swagger
 * /orders:
 *   get:
 *     summary: Get all orders
 *     tags: [Orders]
 *     responses:
 *       200:
 *         description: A list of orders
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Orders'
 *       500:
 *         description: Server error
 */
router.get('/', ordersController.getAllOrders);

/**
 * @swagger
 * /orders/{id}:
 *   get:
 *     summary: Get an order by ID
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Order ID
 *     responses:
 *       200:
 *         description: Order details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Orders'
 *       404:
 *         description: Order not found
 *       500:
 *         description: Server error
 */
router.get('/:id', ordersController.getOrderById);

/**
 * @swagger
 * /orders/{id}:
 *   put:
 *     summary: Update an order by ID
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Order ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               CustomerID:
 *                 type: integer
 *               DishIDsList:
 *                 type: string
 *               OrderInstructions:
 *                 type: string
 *               OrderCost:
 *                 type: integer
 *               OrderPlaceDateTime:
 *                 type: string
 *                 format: date-time
 *               OrderCompleteDateTime:
 *                 type: string
 *                 format: date-time
 *               Status:
 *                 type: string
 *             example:
 *               CustomerID: 1
 *               DishIDsList: "1,2,3"
 *               OrderInstructions: "Add extra cheese"
 *               OrderCost: 200
 *               OrderPlaceDateTime: "2024-08-25T14:00:00Z"
 *               OrderCompleteDateTime: "2024-08-25T15:00:00Z"
 *               Status: "In Progress"
 *     responses:
 *       200:
 *         description: Order updated successfully
 *       404:
 *         description: Order not found
 *       500:
 *         description: Server error
 */
router.put('/:id', ordersController.updateOrder);

/**
 * @swagger
 * /orders/{id}:
 *   delete:
 *     summary: Delete an order by ID
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Order ID
 *     responses:
 *       204:
 *         description: Order deleted successfully
 *       404:
 *         description: Order not found
 *       500:
 *         description: Server error
 */
router.delete('/:id', ordersController.deleteOrder);

module.exports = router;
