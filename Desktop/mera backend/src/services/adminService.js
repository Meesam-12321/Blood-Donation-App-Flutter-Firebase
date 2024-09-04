const Admin = require('../models/Admin');

exports.createAdmin = async (adminData) => {
  try {
    const newAdmin = await Admin.create(adminData);
    return newAdmin;
  } catch (error) {
    throw new Error('Error creating admin: ' + error.message);
  }
};

exports.getAllAdmins = async () => {
  try {
    const admins = await Admin.findAll();
    return admins;
  } catch (error) {
    throw new Error('Error retrieving admins: ' + error.message);
  }
};

exports.getAdminById = async (id) => {
  try {
    const admin = await Admin.findByPk(id);
    if (!admin) {
      throw new Error('Admin not found');
    }
    return admin;
  } catch (error) {
    throw new Error('Error retrieving admin: ' + error.message);
  }
};

exports.updateAdmin = async (id, adminData) => {
  try {
    const admin = await Admin.findByPk(id);
    if (!admin) {
      throw new Error('Admin not found');
    }
    await admin.update(adminData);
    return admin;
  } catch (error) {
    throw new Error('Error updating admin: ' + error.message);
  }
};

exports.deleteAdmin = async (id) => {
  try {
    const admin = await Admin.findByPk(id);
    if (!admin) {
      throw new Error('Admin not found');
    }
    await admin.destroy();
    return;
  } catch (error) {
    throw new Error('Error deleting admin: ' + error.message);
  }
};
