const express = require('express');
const router = express.Router();
const dishesController = require('../controllers/dishesController');

/**
 * @swagger
 * /dishes:
 *   post:
 *     summary: Create a new dish
 *     tags: [Dishes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               MenuID:
 *                 type: integer
 *               VendorID:
 *                 type: integer
 *               DishName:
 *                 type: string
 *               DishCategory:
 *                 type: string
 *               DishDescription:
 *                 type: string
 *               DishTags:
 *                 type: string
 *               DishDetails:
 *                 type: string
 *               DishRating:
 *                 type: number
 *                 format: decimal
 *               DishPhotoPath:
 *                 type: string
 *               DishStatus:
 *                 type: string
 *             example:
 *               MenuID: 1
 *               VendorID: 2
 *               DishName: "Chicken Alfredo"
 *               DishCategory: "Pasta"
 *               DishDescription: "Creamy chicken alfredo pasta"
 *               DishTags: "creamy, chicken, pasta"
 *               DishDetails: "Served with garlic bread"
 *               DishRating: 4.5
 *               DishPhotoPath: "/images/chicken_alfredo.jpg"
 *               DishStatus: "Available"
 *     responses:
 *       201:
 *         description: Dish created successfully
 *       400:
 *         description: Invalid input, required fields are missing
 *       500:
 *         description: Server error
 */
router.post('/', dishesController.createDish);

/**
 * @swagger
 * /dishes:
 *   get:
 *     summary: Get all dishes
 *     tags: [Dishes]
 *     responses:
 *       200:
 *         description: A list of dishes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Dish'
 *       500:
 *         description: Server error
 */
router.get('/', dishesController.getAllDishes);

/**
 * @swagger
 * /dishes/{id}:
 *   get:
 *     summary: Get a dish by ID
 *     tags: [Dishes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Dish ID
 *     responses:
 *       200:
 *         description: Dish details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Dish'
 *       404:
 *         description: Dish not found
 *       500:
 *         description: Server error
 */
router.get('/:id', dishesController.getDishById);

/**
 * @swagger
 * /dishes/{id}:
 *   put:
 *     summary: Update a dish by ID
 *     tags: [Dishes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Dish ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               MenuID:
 *                 type: integer
 *               VendorID:
 *                 type: integer
 *               DishName:
 *                 type: string
 *               DishCategory:
 *                 type: string
 *               DishDescription:
 *                 type: string
 *               DishTags:
 *                 type: string
 *               DishDetails:
 *                 type: string
 *               DishRating:
 *                 type: number
 *                 format: decimal
 *               DishPhotoPath:
 *                 type: string
 *               DishStatus:
 *                 type: string
 *             example:
 *               MenuID: 1
 *               VendorID: 2
 *               DishName: "Chicken Alfredo"
 *               DishCategory: "Pasta"
 *               DishDescription: "Creamy chicken alfredo pasta"
 *               DishTags: "creamy, chicken, pasta"
 *               DishDetails: "Served with garlic bread"
 *               DishRating: 4.5
 *               DishPhotoPath: "/images/chicken_alfredo.jpg"
 *               DishStatus: "Available"
 *     responses:
 *       200:
 *         description: Dish updated successfully
 *       404:
 *         description: Dish not found
 *       500:
 *         description: Server error
 */
router.put('/:id', dishesController.updateDish);

/**
 * @swagger
 * /dishes/{id}:
 *   delete:
 *     summary: Delete a dish by ID
 *     tags: [Dishes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Dish ID
 *     responses:
 *       204:
 *         description: Dish deleted successfully
 *       404:
 *         description: Dish not found
 *       500:
 *         description: Server error
 */
router.delete('/:id', dishesController.deleteDish);

module.exports = router;
