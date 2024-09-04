const Vendor = require('../models/Vendor');

exports.createVendor = async (vendorData) => {
  try {
    const newVendor = await Vendor.create(vendorData);
    return newVendor;
  } catch (error) {
    throw new Error('Error creating vendor: ' + error.message);
  }
};

exports.getAllVendors = async () => {
  try {
    const vendors = await Vendor.findAll();
    return vendors;
  } catch (error) {
    throw new Error('Error retrieving vendors: ' + error.message);
  }
};

exports.getVendorById = async (id) => {
  try {
    const vendor = await Vendor.findByPk(id);
    if (!vendor) {
      throw new Error('Vendor not found');
    }
    return vendor;
  } catch (error) {
    throw new Error('Error retrieving vendor: ' + error.message);
  }
};

exports.updateVendor = async (id, vendorData) => {
  try {
    const vendor = await Vendor.findByPk(id);
    if (!vendor) {
      throw new Error('Vendor not found');
    }
    await vendor.update(vendorData);
    return vendor;
  } catch (error) {
    throw new Error('Error updating vendor: ' + error.message);
  }
};

exports.deleteVendor = async (id) => {
  try {
    const vendor = await Vendor.findByPk(id);
    if (!vendor) {
      throw new Error('Vendor not found');
    }
    await vendor.destroy();
    return;
  } catch (error) {
    throw new Error('Error deleting vendor: ' + error.message);
  }
};
