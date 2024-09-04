const express = require('express');
const router = express.Router();
const naviNetController = require('../controllers/naviNetController');
const upload = require('../middleware/fileUpload');

/**
 * @swagger
 * /navinet/upload:
 *   post:
 *     summary: Upload a NaviNet file and compare customer data
 *     tags: [NaviNet]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               naviNetFile:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: File processed and customers flagged successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 updatedCustomers:
 *                   type: array
 *                   items:
 *                     type: object
 *                     description: List of updated customers
 *                 newPotentialCustomers:
 *                   type: array
 *                   items:
 *                     type: object
 *                     description: List of new potential customers
 *                 message:
 *                   type: string
 *                   example: "File processed and customers flagged successfully"
 *       400:
 *         description: No file uploaded or invalid file
 *       500:
 *         description: Internal server error
 */
router.post('/upload', upload.single('naviNetFile'), naviNetController.uploadAndCompare);

module.exports = router;
