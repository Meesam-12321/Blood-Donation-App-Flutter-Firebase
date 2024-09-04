const express = require('express');
const router = express.Router();
const coordinatorController = require('../controllers/coordinatorController');

/**
 * @swagger
 * /coordinators:
 *   post:
 *     summary: Create a new coordinator
 *     tags: [Coordinator]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Name:
 *                 type: string
 *               Phone:
 *                 type: string
 *               Email:
 *                 type: string
 *             example:
 *               Name: "John Doe"
 *               Phone: "123-456-7890"
 *               Email: "johndoe@example.com"
 *     responses:
 *       201:
 *         description: Coordinator created successfully
 *       400:
 *         description: Invalid input, required fields are missing
 *       500:
 *         description: Server error
 */
router.post('/', coordinatorController.createCoordinator);

/**
 * @swagger
 * /coordinators:
 *   get:
 *     summary: Get all coordinators
 *     tags: [Coordinator]
 *     responses:
 *       200:
 *         description: A list of coordinators
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Coordinator'
 *       500:
 *         description: Server error
 */
router.get('/', coordinatorController.getAllCoordinators);

/**
 * @swagger
 * /coordinators/{id}:
 *   get:
 *     summary: Get a coordinator by ID
 *     tags: [Coordinator]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Coordinator ID
 *     responses:
 *       200:
 *         description: Coordinator details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Coordinator'
 *       404:
 *         description: Coordinator not found
 *       500:
 *         description: Server error
 */
router.get('/:id', coordinatorController.getCoordinatorById);

/**
 * @swagger
 * /coordinators/{id}:
 *   put:
 *     summary: Update a coordinator by ID
 *     tags: [Coordinator]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Coordinator ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Name:
 *                 type: string
 *               Phone:
 *                 type: string
 *               Email:
 *                 type: string
 *             example:
 *               Name: "Jane Doe"
 *               Phone: "987-654-3210"
 *               Email: "janedoe@example.com"
 *     responses:
 *       200:
 *         description: Coordinator updated successfully
 *       404:
 *         description: Coordinator not found
 *       500:
 *         description: Server error
 */
router.put('/:id', coordinatorController.updateCoordinator);

/**
 * @swagger
 * /coordinators/{id}:
 *   delete:
 *     summary: Delete a coordinator by ID
 *     tags: [Coordinator]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Coordinator ID
 *     responses:
 *       204:
 *         description: Coordinator deleted successfully
 *       404:
 *         description: Coordinator not found
 *       500:
 *         description: Server error
 */
router.delete('/:id', coordinatorController.deleteCoordinator);

module.exports = router;
