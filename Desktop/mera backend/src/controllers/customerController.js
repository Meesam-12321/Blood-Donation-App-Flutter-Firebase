const customerService = require('../services/customerService');
const CustomError = require('../utils/CustomError');

exports.createCustomer = async (req, res, next) => {
  try {
    // Validate input
    if (!req.body.name || !req.body.email) {
      throw new CustomError('Name and email are required', 400);
    }

    const newCustomer = await customerService.createCustomer(req.body);
    res.status(201).json({ success: true, data: newCustomer });
  } catch (error) {
    next(error); // Pass error to the errorHandler middleware
  }
};

exports.getAllCustomers = async (req, res, next) => {
  try {
    const customers = await customerService.getAllCustomers();
    res.status(200).json({ success: true, data: customers });
  } catch (error) {
    next(error); // Pass error to the errorHandler middleware
  }
};

exports.getCustomerById = async (req, res, next) => {
  try {
    const customer = await customerService.getCustomerById(req.params.id);
    if (!customer) {
      throw new CustomError('Customer not found', 404);
    }
    res.status(200).json({ success: true, data: customer });
  } catch (error) {
    next(error); // Pass error to the errorHandler middleware
  }
};

exports.updateCustomer = async (req, res, next) => {
  try {
    const updatedCustomer = await customerService.updateCustomer(req.params.id, req.body);
    if (!updatedCustomer) {
      throw new CustomError('Customer not found or could not be updated', 404);
    }
    res.status(200).json({ success: true, data: updatedCustomer });
  } catch (error) {
    next(error); // Pass error to the errorHandler middleware
  }
};

exports.deleteCustomer = async (req, res, next) => {
  try {
    const deleted = await customerService.deleteCustomer(req.params.id);
    if (!deleted) {
      throw new CustomError('Customer not found or could not be deleted', 404);
    }
    res.status(204).end();
  } catch (error) {
    next(error); // Pass error to the errorHandler middleware
  }
};
