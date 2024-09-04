const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Admin = sequelize.define('Admin', {
  AdminID: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  Username: {
    type: DataTypes.STRING(45),
    allowNull: false,
    unique: true,
  },
  Password: {
    type: DataTypes.STRING(64),
    allowNull: false,
  },
  Phone: {
    type: DataTypes.STRING(45),
    allowNull: true,
  },
  Email: {
    type: DataTypes.STRING(45),
    allowNull: true,
  },
  ProfilePhotoPath: {
    type: DataTypes.STRING(45),
    allowNull: true,
  },
  Address: {
    type: DataTypes.STRING(45),
    allowNull: true,
  },
  Role: {
    type: DataTypes.ENUM('Super Admin', 'Admin'),
    allowNull: false,
    defaultValue: 'Admin',
  },
  Status: {
    type: DataTypes.STRING(45),
    allowNull: true,
  },
  SecurityQuestion: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
}, {
  tableName: 'Admin',
  timestamps: true,
});

module.exports = Admin;
