const express = require('express');
const router = express.Router();
const favDishController = require('../controllers/favDishController');

/**
 * @swagger
 * /favdishes:
 *   post:
 *     summary: Add a new favorite dish
 *     tags: [FavDish]
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
 *             example:
 *               CustomerID: 1
 *               DishID: 101
 *     responses:
 *       201:
 *         description: Favorite dish added successfully
 *       400:
 *         description: Invalid input, required fields are missing
 *       500:
 *         description: Server error
 */
router.post('/', favDishController.addFavDish);

/**
 * @swagger
 * /favdishes:
 *   get:
 *     summary: Get all favorite dishes
 *     tags: [FavDish]
 *     responses:
 *       200:
 *         description: A list of favorite dishes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/FavDish'
 *       500:
 *         description: Server error
 */
router.get('/', favDishController.getAllFavDishes);

/**
 * @swagger
 * /favdishes/{id}:
 *   get:
 *     summary: Get a favorite dish by ID
 *     tags: [FavDish]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Favorite Dish ID
 *     responses:
 *       200:
 *         description: Favorite dish details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/FavDish'
 *       404:
 *         description: Favorite dish not found
 *       500:
 *         description: Server error
 */
router.get('/:id', favDishController.getFavDishById);

/**
 * @swagger
 * /favdishes/{id}:
 *   put:
 *     summary: Update a favorite dish by ID
 *     tags: [FavDish]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Favorite Dish ID
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
 *             example:
 *               CustomerID: 1
 *               DishID: 101
 *     responses:
 *       200:
 *         description: Favorite dish updated successfully
 *       404:
 *         description: Favorite dish not found
 *       500:
 *         description: Server error
 */
router.put('/:id', favDishController.updateFavDish);

/**
 * @swagger
 * /favdishes/{id}:
 *   delete:
 *     summary: Delete a favorite dish by ID
 *     tags: [FavDish]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Favorite Dish ID
 *     responses:
 *       204:
 *         description: Favorite dish deleted successfully
 *       404:
 *         description: Favorite dish not found
 *       500:
 *         description: Server error
 */
router.delete('/:id', favDishController.deleteFavDish);

module.exports = router;
