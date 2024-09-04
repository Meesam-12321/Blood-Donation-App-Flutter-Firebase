const Customer = require('../models/Customer');

exports.createCustomer = async (customerData) => {
  try {
    const newCustomer = await Customer.create(customerData);
    return newCustomer;
  } catch (error) {
    throw new Error('Error creating customer: ' + error.message);
  }
};

exports.getAllCustomers = async () => {
  try {
    const customers = await Customer.findAll();
    return customers;
  } catch (error) {
    throw new Error('Error retrieving customers: ' + error.message);
  }
};

exports.getCustomerById = async (id) => {
  try {
    const customer = await Customer.findByPk(id);
    if (!customer) {
      throw new Error('Customer not found');
    }
    return customer;
  } catch (error) {
    throw new Error('Error retrieving customer: ' + error.message);
  }
};

exports.updateCustomer = async (id, customerData) => {
  try {
    const customer = await Customer.findByPk(id);
    if (!customer) {
      throw new Error('Customer not found');
    }
    await customer.update(customerData);
    return customer;
  } catch (error) {
    throw new Error('Error updating customer: ' + error.message);
  }
};

exports.deleteCustomer = async (id) => {
  try {
    const customer = await Customer.findByPk(id);
    if (!customer) {
      throw new Error('Customer not found');
    }
    await customer.destroy();
    return;
  } catch (error) {
    throw new Error('Error deleting customer: ' + error.message);
  }
};

exports.getCustomerByUsername = async (username) => {
  try {
    const customer = await Customer.findOne({ where: { Username: username } });
    return customer;
  } catch (error) {
    throw new Error('Error retrieving customer by username: ' + error.message);
  }
};