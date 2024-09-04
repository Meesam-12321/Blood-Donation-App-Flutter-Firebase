const Orders = require('../models/Orders');

exports.createOrder = async (orderData) => {
  try {
    const newOrder = await Orders.create(orderData);
    return newOrder;
  } catch (error) {
    throw new Error('Error creating order: ' + error.message);
  }
};

exports.getAllOrders = async () => {
  try {
    const orders = await Orders.findAll();
    return orders;
  } catch (error) {
    throw new Error('Error retrieving orders: ' + error.message);
  }
};

exports.getOrderById = async (id) => {
  try {
    const order = await Orders.findByPk(id);
    if (!order) {
      throw new Error('Order not found');
    }
    return order;
  } catch (error) {
    throw new Error('Error retrieving order: ' + error.message);
  }
};

exports.updateOrder = async (id, orderData) => {
  try {
    const order = await Orders.findByPk(id);
    if (!order) {
      throw new Error('Order not found');
    }
    await order.update(orderData);
    return order;
  } catch (error) {
    throw new Error('Error updating order: ' + error.message);
  }
};

exports.deleteOrder = async (id) => {
  try {
    const order = await Orders.findByPk(id);
    if (!order) {
      throw new Error('Order not found');
    }
    await order.destroy();
    return;
  } catch (error) {
    throw new Error('Error deleting order: ' + error.message);
  }
};
