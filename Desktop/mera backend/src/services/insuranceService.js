const Insurance = require('../models/Insurance');

exports.createInsurance = async (insuranceData) => {
  try {
    const newInsurance = await Insurance.create(insuranceData);
    return newInsurance;
  } catch (error) {
    throw new Error('Error creating insurance: ' + error.message);
  }
};

exports.getAllInsurance = async () => {
  try {
    const insurances = await Insurance.findAll();
    return insurances;
  } catch (error) {
    throw new Error('Error retrieving insurances: ' + error.message);
  }
};

exports.getInsuranceById = async (id) => {
  try {
    const insurance = await Insurance.findByPk(id);
    if (!insurance) {
      throw new Error('Insurance not found');
    }
    return insurance;
  } catch (error) {
    throw new Error('Error retrieving insurance: ' + error.message);
  }
};

exports.updateInsurance = async (id, insuranceData) => {
  try {
    const insurance = await Insurance.findByPk(id);
    if (!insurance) {
      throw new Error('Insurance not found');
    }
    await insurance.update(insuranceData);
    return insurance;
  } catch (error) {
    throw new Error('Error updating insurance: ' + error.message);
  }
};

exports.deleteInsurance = async (id) => {
  try {
    const insurance = await Insurance.findByPk(id);
    if (!insurance) {
      throw new Error('Insurance not found');
    }
    await insurance.destroy();
    return;
  } catch (error) {
    throw new Error('Error deleting insurance: ' + error.message);
  }
};
