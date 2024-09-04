const express = require('express');
const router = express.Router();
const ridersController = require('../controllers/ridersController');

/**
 * @swagger
 * /riders:
 *   post:
 *     summary: Create a new rider
 *     tags: [Riders]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Username:
 *                 type: string
 *               Password:
 *                 type: string
 *               Phone:
 *                 type: string
 *               Email:
 *                 type: string
 *               ProfilePhotoPath:
 *                 type: string
 *               Address:
 *                 type: string
 *               Status:
 *                 type: string
 *               SecurityQuestion:
 *                 type: string
 *             example:
 *               Username: "rideruser"
 *               Password: "password123"
 *               Phone: "1234567890"
 *               Email: "rider@example.com"
 *               ProfilePhotoPath: "/images/rider.jpg"
 *               Address: "123 Rider St"
 *               Status: "Active"
 *               SecurityQuestion: "Your first pet's name?"
 *     responses:
 *       201:
 *         description: Rider created successfully
 *       400:
 *         description: Invalid input, required fields are missing
 *       500:
 *         description: Server error
 */
router.post('/', ridersController.createRider);

/**
 * @swagger
 * /riders:
 *   get:
 *     summary: Get all riders
 *     tags: [Riders]
 *     responses:
 *       200:
 *         description: A list of riders
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Riders'
 *       500:
 *         description: Server error
 */
router.get('/', ridersController.getAllRiders);

/**
 * @swagger
 * /riders/{id}:
 *   get:
 *     summary: Get a rider by ID
 *     tags: [Riders]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Rider ID
 *     responses:
 *       200:
 *         description: Rider details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Riders'
 *       404:
 *         description: Rider not found
 *       500:
 *         description: Server error
 */
router.get('/:id', ridersController.getRiderById);

/**
 * @swagger
 * /riders/{id}:
 *   put:
 *     summary: Update a rider by ID
 *     tags: [Riders]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Rider ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Username:
 *                 type: string
 *               Password:
 *                 type: string
 *               Phone:
 *                 type: string
 *               Email:
 *                 type: string
 *               ProfilePhotoPath:
 *                 type: string
 *               Address:
 *                 type: string
 *               Status:
 *                 type: string
 *               SecurityQuestion:
 *                 type: string
 *     responses:
 *       200:
 *         description: Rider updated successfully
 *       404:
 *         description: Rider not found
 *       500:
 *         description: Server error
 */
router.put('/:id', ridersController.updateRider);

/**
 * @swagger
 * /riders/{id}:
 *   delete:
 *     summary: Delete a rider by ID
 *     tags: [Riders]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Rider ID
 *     responses:
 *       204:
 *         description: Rider deleted successfully
 *       404:
 *         description: Rider not found
 *       500:
 *         description: Server error
 */
router.delete('/:id', ridersController.deleteRider);

module.exports = router;
