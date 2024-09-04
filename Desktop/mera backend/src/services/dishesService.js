const Dishes = require('../models/Dishes');

exports.createDish = async (dishData) => {
  try {
    const newDish = await Dishes.create(dishData);
    return newDish;
  } catch (error) {
    throw new Error('Error creating dish: ' + error.message);
  }
};

exports.getAllDishes = async () => {
  try {
    const dishes = await Dishes.findAll();
    return dishes;
  } catch (error) {
    throw new Error('Error retrieving dishes: ' + error.message);
  }
};

exports.getDishById = async (id) => {
  try {
    const dish = await Dishes.findByPk(id);
    if (!dish) {
      throw new Error('Dish not found');
    }
    return dish;
  } catch (error) {
    throw new Error('Error retrieving dish: ' + error.message);
  }
};

exports.updateDish = async (id, dishData) => {
  try {
    const dish = await Dishes.findByPk(id);
    if (!dish) {
      throw new Error('Dish not found');
    }
    await dish.update(dishData);
    return dish;
  } catch (error) {
    throw new Error('Error updating dish: ' + error.message);
  }
};

exports.deleteDish = async (id) => {
  try {
    const dish = await Dishes.findByPk(id);
    if (!dish) {
      throw new Error('Dish not found');
    }
    await dish.destroy();
    return;
  } catch (error) {
    throw new Error('Error deleting dish: ' + error.message);
  }
};
