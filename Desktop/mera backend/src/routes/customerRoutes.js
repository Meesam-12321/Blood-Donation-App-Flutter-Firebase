const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');

/**
 * @swagger
 * /customers:
 *   post:
 *     summary: Create a new customer
 *     tags: [Customer]
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
 *               MemberID:
 *                 type: string
 *               MedicaidID:
 *                 type: string
 *               Name:
 *                 type: string
 *               Phone:
 *                 type: string
 *               ProfilePhotoPath:
 *                 type: string
 *               InsuranceCardPhotoPath:
 *                 type: string
 *               Address:
 *                 type: string
 *               DeliveryNote:
 *                 type: string
 *               PreferredDeliveryTime:
 *                 type: string
 *               AlternateContactName:
 *                 type: string
 *               AlternateContactPhone:
 *                 type: string
 *               AlternateContactAddress:
 *                 type: string
 *               Allergies:
 *                 type: string
 *               MemberDOB:
 *                 type: string
 *                 format: date
 *               IOType:
 *                 type: string
 *               AuthNumberFacets:
 *                 type: string
 *               StartDT:
 *                 type: string
 *                 format: date-time
 *               EndDT:
 *                 type: string
 *                 format: date-time
 *               ICD10Code:
 *                 type: string
 *               Status:
 *                 type: string
 *               SecurityQuestion:
 *                 type: string
 *               CoordinatorID:
 *                 type: integer
 *               InsuranceID:
 *                 type: integer
 *             example:
 *               Username: "johndoe"
 *               Password: "password123"
 *               MemberID: "12345"
 *               MedicaidID: "98765"
 *               Name: "John Doe"
 *               Phone: "1234567890"
 *               ProfilePhotoPath: "/images/profile.jpg"
 *               InsuranceCardPhotoPath: "/images/insurance.jpg"
 *               Address: "123 Main St"
 *               DeliveryNote: "Leave at the front door"
 *               PreferredDeliveryTime: "08:00 - 10:00"
 *               AlternateContactName: "Jane Doe"
 *               AlternateContactPhone: "0987654321"
 *               AlternateContactAddress: "456 Elm St"
 *               Allergies: "Peanuts"
 *               MemberDOB: "1985-08-25"
 *               IOType: "Inpatient"
 *               AuthNumberFacets: "AUTH123"
 *               StartDT: "2024-08-25T10:00:00Z"
 *               EndDT: "2024-08-30T10:00:00Z"
 *               ICD10Code: "A123"
 *               Status: "Active"
 *               SecurityQuestion: "What is your pet's name?"
 *               CoordinatorID: 1
 *               InsuranceID: 1
 *     responses:
 *       201:
 *         description: Customer created successfully
 *       400:
 *         description: Invalid input, required fields are missing
 *       500:
 *         description: Server error
 */
router.post('/', customerController.createCustomer);

/**
 * @swagger
 * /customers:
 *   get:
 *     summary: Get all customers
 *     tags: [Customer]
 *     responses:
 *       200:
 *         description: A list of customers
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Customer'
 *       500:
 *         description: Server error
 */
router.get('/', customerController.getAllCustomers);

/**
 * @swagger
 * /customers/{id}:
 *   get:
 *     summary: Get a customer by ID
 *     tags: [Customer]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Customer ID
 *     responses:
 *       200:
 *         description: Customer details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Customer'
 *       404:
 *         description: Customer not found
 *       500:
 *         description: Server error
 */
router.get('/:id', customerController.getCustomerById);

/**
 * @swagger
 * /customers/{id}:
 *   put:
 *     summary: Update a customer by ID
 *     tags: [Customer]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Customer ID
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
 *               MemberID:
 *                 type: string
 *               MedicaidID:
 *                 type: string
 *               Name:
 *                 type: string
 *               Phone:
 *                 type: string
 *               ProfilePhotoPath:
 *                 type: string
 *               InsuranceCardPhotoPath:
 *                 type: string
 *               Address:
 *                 type: string
 *               DeliveryNote:
 *                 type: string
 *               PreferredDeliveryTime:
 *                 type: string
 *               AlternateContactName:
 *                 type: string
 *               AlternateContactPhone:
 *                 type: string
 *               AlternateContactAddress:
 *                 type: string
 *               Allergies:
 *                 type: string
 *               MemberDOB:
 *                 type: string
 *                 format: date
 *               IOType:
 *                 type: string
 *               AuthNumberFacets:
 *                 type: string
 *               StartDT:
 *                 type: string
 *                 format: date-time
 *               EndDT:
 *                 type: string
 *                 format: date-time
 *               ICD10Code:
 *                 type: string
 *               Status:
 *                 type: string
 *               SecurityQuestion:
 *                 type: string
 *               CoordinatorID:
 *                 type: integer
 *               InsuranceID:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Customer updated successfully
 *       404:
 *         description: Customer not found
 *       500:
 *         description: Server error
 */
router.put('/:id', customerController.updateCustomer);

/**
 * @swagger
 * /customers/{id}:
 *   delete:
 *     summary: Delete a customer by ID
 *     tags: [Customer]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Customer ID
 *     responses:
 *       204:
 *         description: Customer deleted successfully
 *       404:
 *         description: Customer not found
 *       500:
 *         description: Server error
 */
router.delete('/:id', customerController.deleteCustomer);

module.exports = router;
