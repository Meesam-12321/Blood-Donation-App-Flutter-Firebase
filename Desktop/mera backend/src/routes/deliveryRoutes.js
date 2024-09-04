const express = require('express');
const router = express.Router();
const deliveryController = require('../controllers/deliveryController');

/**
 * @swagger
 * /deliveries:
 *   post:
 *     summary: Create a new delivery
 *     tags: [Delivery]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               CustomerID:
 *                 type: integer
 *               RiderID:
 *                 type: integer
 *               OrderID:
 *                 type: integer
 *               DeliveryDateTime:
 *                 type: string
 *                 format: date-time
 *               Rating:
 *                 type: string
 *               ProofPhotoPath:
 *                 type: string
 *               RiderNote:
 *                 type: string
 *             example:
 *               CustomerID: 1
 *               RiderID: 2
 *               OrderID: 3
 *               DeliveryDateTime: "2024-08-26T10:00:00Z"
 *               Rating: "5"
 *               ProofPhotoPath: "/images/delivery.jpg"
 *               RiderNote: "Left at the door"
 *     responses:
 *       201:
 *         description: Delivery created successfully
 *       400:
 *         description: Invalid input, required fields are missing
 *       500:
 *         description: Server error
 */
router.post('/', deliveryController.createDelivery);

/**
 * @swagger
 * /deliveries:
 *   get:
 *     summary: Get all deliveries
 *     tags: [Delivery]
 *     responses:
 *       200:
 *         description: A list of deliveries
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Delivery'
 *       500:
 *         description: Server error
 */
router.get('/', deliveryController.getAllDeliveries);

/**
 * @swagger
 * /deliveries/{id}:
 *   get:
 *     summary: Get a delivery by ID
 *     tags: [Delivery]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Delivery ID
 *     responses:
 *       200:
 *         description: Delivery details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Delivery'
 *       404:
 *         description: Delivery not found
 *       500:
 *         description: Server error
 */
router.get('/:id', deliveryController.getDeliveryById);

/**
 * @swagger
 * /deliveries/{id}:
 *   put:
 *     summary: Update a delivery by ID
 *     tags: [Delivery]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Delivery ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               CustomerID:
 *                 type: integer
 *               RiderID:
 *                 type: integer
 *               OrderID:
 *                 type: integer
 *               DeliveryDateTime:
 *                 type: string
 *                 format: date-time
 *               Rating:
 *                 type: string
 *               ProofPhotoPath:
 *                 type: string
 *               RiderNote:
 *                 type: string
 *             example:
 *               CustomerID: 1
 *               RiderID: 2
 *               OrderID: 3
 *               DeliveryDateTime: "2024-08-26T10:00:00Z"
 *               Rating: "5"
 *               ProofPhotoPath: "/images/delivery.jpg"
 *               RiderNote: "Left at the door"
 *     responses:
 *       200:
 *         description: Delivery updated successfully
 *       404:
 *         description: Delivery not found
 *       500:
 *         description: Server error
 */
router.put('/:id', deliveryController.updateDelivery);

/**
 * @swagger
 * /deliveries/{id}:
 *   delete:
 *     summary: Delete a delivery by ID
 *     tags: [Delivery]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Delivery ID
 *     responses:
 *       204:
 *         description: Delivery deleted successfully
 *       404:
 *         description: Delivery not found
 *       500:
 *         description: Server error
 */
router.delete('/:id', deliveryController.deleteDelivery);

module.exports = router;
