const dishesService = require('../services/dishesService');
const CustomError = require('../utils/CustomError');

exports.createDish = async (req, res, next) => {
  try {
    console.log("Request to create dish:", req.body); // Log the incoming request data

    // Validate input
    if (!req.body.name || !req.body.price) {
      throw new CustomError('Dish name and price are required', 400);
    }

    const newDish = await dishesService.createDish(req.body);
    res.status(201).json({ success: true, data: newDish });
  } catch (error) {
    console.error("Error creating dish:", error); // Log the error
    next(error); // Pass error to the errorHandler middleware
  }
};

exports.getAllDishes = async (req, res, next) => {
  try {
    const dishes = await dishesService.getAllDishes();
    res.status(200).json({ success: true, data: dishes });
  } catch (error) {
    console.error("Error retrieving dishes:", error); // Log the error
    next(error); // Pass error to the errorHandler middleware
  }
};

exports.getDishById = async (req, res, next) => {
  try {
    const dish = await dishesService.getDishById(req.params.id);
    if (!dish) {
      throw new CustomError("Dish not found", 404);
    }
    res.status(200).json({ success: true, data: dish });
  } catch (error) {
    console.error("Error retrieving dish by ID:", error); // Log the error
    next(error); // Pass error to the errorHandler middleware
  }
};

exports.updateDish = async (req, res, next) => {
  try {
    const updatedDish = await dishesService.updateDish(req.params.id, req.body);
    if (!updatedDish) {
      throw new CustomError("Dish not found or could not be updated", 404);
    }
    res.status(200).json({ success: true, data: updatedDish });
  } catch (error) {
    console.error("Error updating dish:", error); // Log the error
    next(error); // Pass error to the errorHandler middleware
  }
};

exports.deleteDish = async (req, res, next) => {
  try {
    const dish = await dishesService.deleteDish(req.params.id);
    if (!dish) {
      throw new CustomError("Dish not found or could not be deleted", 404);
    }
    res.status(204).send();
  } catch (error) {
    console.error("Error deleting dish:", error); // Log the error
    next(error); // Pass error to the errorHandler middleware
  }
};
