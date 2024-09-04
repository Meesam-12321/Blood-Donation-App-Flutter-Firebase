const Coordinator = require('../models/Coordinator');

exports.createCoordinator = async (coordinatorData) => {
  try {
    const newCoordinator = await Coordinator.create(coordinatorData);
    return newCoordinator;
  } catch (error) {
    throw new Error('Error creating coordinator: ' + error.message);
  }
};

exports.getAllCoordinators = async () => {
  try {
    const coordinators = await Coordinator.findAll();
    return coordinators;
  } catch (error) {
    throw new Error('Error retrieving coordinators: ' + error.message);
  }
};

exports.getCoordinatorById = async (id) => {
  try {
    const coordinator = await Coordinator.findByPk(id);
    if (!coordinator) {
      throw new Error('Coordinator not found');
    }
    return coordinator;
  } catch (error) {
    throw new Error('Error retrieving coordinator: ' + error.message);
  }
};

exports.updateCoordinator = async (id, coordinatorData) => {
  try {
    const coordinator = await Coordinator.findByPk(id);
    if (!coordinator) {
      throw new Error('Coordinator not found');
    }
    await coordinator.update(coordinatorData);
    return coordinator;
  } catch (error) {
    throw new Error('Error updating coordinator: ' + error.message);
  }
};

exports.deleteCoordinator = async (id) => {
  try {
    const coordinator = await Coordinator.findByPk(id);
    if (!coordinator) {
      throw new Error('Coordinator not found');
    }
    await coordinator.destroy();
    return;
  } catch (error) {
    throw new Error('Error deleting coordinator: ' + error.message);
  }
};
