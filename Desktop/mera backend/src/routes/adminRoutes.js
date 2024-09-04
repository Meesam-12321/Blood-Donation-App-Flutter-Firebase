const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const authenticateToken = require('../middleware/authenticateToken');
const rbac = require('../middleware/rbacMiddleware');

// Protect all routes
// router.post('/', authenticateToken, rbac('Super Admin'), adminController.createAdmin);
// router.get('/', authenticateToken, rbac('Admin'), adminController.getAllAdmins);
// router.get('/:id', authenticateToken, rbac('Admin'), adminController.getAdminById);
// router.put('/:id', authenticateToken, rbac('Super Admin'), adminController.updateAdmin);
// router.delete('/:id', authenticateToken, rbac('Super Admin'), adminController.deleteAdmin);
/**
 * @swagger
 * /admin/api/admins:
 *   post:
 *     summary: Create a new admin
 *     security:
 *       - BearerAuth: []
 *     tags: [Admin]
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
 *               Role:
 *                 type: string
 *               Status:
 *                 type: string
 *               SecurityQuestion:
 *                 type: string
 *             example:
 *               Username: "adminuser"
 *               Password: "password123"
 *               Phone: "1234567890"
 *               Email: "admin@example.com"
 *               ProfilePhotoPath: "/images/admin.jpg"
 *               Address: "123 Admin St"
 *               Role: "Admin"
 *               Status: "Active"
 *               SecurityQuestion: "Your favorite color?"
 *     responses:
 *       201:
 *         description: Admin created successfully
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
/**
 * @swagger
 * /admin/api/admins:
 *   get:
 *     summary: Get all admins
 *     security:
 *       - BearerAuth: []
 *     tags: [Admin]
 *     responses:
 *       200:
 *         description: A list of admins
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Admin'
 *       500:
 *         description: Server error
 */


/**
 * @swagger
 * /admin/api/admins/{id}:
 *   get:
 *     summary: Get an admin by ID
 *     security:
 *       - BearerAuth: []
 *     tags: [Admin]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Admin ID
 *     responses:
 *       200:
 *         description: Admin details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Admin'
 *       404:
 *         description: Admin not found
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /admin/api/admins/{id}:
 *   put:
 *     summary: Update an admin by ID
 *     security:
 *       - BearerAuth: []
 *     tags: [Admin]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Admin ID
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
 *               Role:
 *                 type: string
 *               Status:
 *                 type: string
 *               SecurityQuestion:
 *                 type: string
 *     responses:
 *       200:
 *         description: Admin updated successfully
 *       404:
 *         description: Admin not found
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /admin/api/admins/{id}:
 *   delete:
 *     summary: Delete an admin by ID
 *     security:
 *       - BearerAuth: []
 *     tags: [Admin]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Admin ID
 *     responses:
 *       204:
 *         description: Admin deleted successfully
 *       404:
 *         description: Admin not found
 *       500:
 *         description: Server error
 */
router.delete('/:id', authenticateToken, rbac('Super Admin'), adminController.deleteAdmin);

router.put('/:id', authenticateToken, rbac('Super Admin'), adminController.updateAdmin);

router.get('/:id', authenticateToken, rbac('Admin'), adminController.getAdminById);

router.get('/', authenticateToken, rbac('Admin'), adminController.getAllAdmins);





router.post('/', authenticateToken, rbac('Super Admin'), adminController.createAdmin);


module.exports = router;
