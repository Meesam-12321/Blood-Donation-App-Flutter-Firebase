const express = require('express');
const router = express.Router();
const vendorController = require('../controllers/vendorController');

/**
 * @swagger
 * /vendors:
 *   post:
 *     summary: Create a new vendor
 *     tags: [Vendors]
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
 *               Name:
 *                 type: string
 *               Phone:
 *                 type: string
 *               Email:
 *                 type: string
 *               Address:
 *                 type: string
 *               ProfilePhotoPath:
 *                 type: string
 *               Rating:
 *                 type: number
 *                 format: float
 *               Status:
 *                 type: string
 *               SecurityQuestion:
 *                 type: string
 *             example:
 *               Username: "vendoruser"
 *               Password: "password123"
 *               Name: "Vendor Name"
 *               Phone: "1234567890"
 *               Email: "vendor@example.com"
 *               Address: "123 Vendor St"
 *               ProfilePhotoPath: "/images/vendor.jpg"
 *               Rating: 4.5
 *               Status: "Active"
 *               SecurityQuestion: "Your first pet's name?"
 *     responses:
 *       201:
 *         description: Vendor created successfully
 *       400:
 *         description: Invalid input, required fields are missing
 *       500:
 *         description: Server error
 */
router.post('/', vendorController.createVendor);

/**
 * @swagger
 * /vendors:
 *   get:
 *     summary: Get all vendors
 *     tags: [Vendors]
 *     responses:
 *       200:
 *         description: A list of vendors
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Vendor'
 *       500:
 *         description: Server error
 */
router.get('/', vendorController.getAllVendors);

/**
 * @swagger
 * /vendors/{id}:
 *   get:
 *     summary: Get a vendor by ID
 *     tags: [Vendors]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Vendor ID
 *     responses:
 *       200:
 *         description: Vendor details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Vendor'
 *       404:
 *         description: Vendor not found
 *       500:
 *         description: Server error
 */
router.get('/:id', vendorController.getVendorById);

/**
 * @swagger
 * /vendors/{id}:
 *   put:
 *     summary: Update a vendor by ID
 *     tags: [Vendors]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Vendor ID
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
 *               Name:
 *                 type: string
 *               Phone:
 *                 type: string
 *               Email:
 *                 type: string
 *               Address:
 *                 type: string
 *               ProfilePhotoPath:
 *                 type: string
 *               Rating:
 *                 type: number
 *                 format: float
 *               Status:
 *                 type: string
 *               SecurityQuestion:
 *                 type: string
 *     responses:
 *       200:
 *         description: Vendor updated successfully
 *       404:
 *         description: Vendor not found
 *       500:
 *         description: Server error
 */
router.put('/:id', vendorController.updateVendor);

/**
 * @swagger
 * /vendors/{id}:
 *   delete:
 *     summary: Delete a vendor by ID
 *     tags: [Vendors]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Vendor ID
 *     responses:
 *       204:
 *         description: Vendor deleted successfully
 *       404:
 *         description: Vendor not found
 *       500:
 *         description: Server error
 */
router.delete('/:id', vendorController.deleteVendor);

module.exports = router;
