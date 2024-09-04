// models/PotentialCustomers.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const PotentialCustomers = sequelize.define('PotentialCustomers', {
  PotentialCustomerID: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  MemberID: {
    type: DataTypes.STRING(45),
    allowNull: false,
    unique: true,
  },
  Name: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  MedicaidID: {
    type: DataTypes.STRING(45),
    allowNull: true,
  },
  Phone: {
    type: DataTypes.STRING(45),
    allowNull: true,
  },
  Address: {
    type: DataTypes.STRING(45),
    allowNull: true,
  },
  DeliveryNote: {
    type: DataTypes.STRING(45),
    allowNull: true,
  },
  PreferredDeliveryTime: {
    type: DataTypes.STRING(45),
    allowNull: true,
  },
  AlternateContactName: {
    type: DataTypes.STRING(45),
    allowNull: true,
  },
  AlternateContactPhone: {
    type: DataTypes.STRING(45),
    allowNull: true,
  },
  AlternateContactAddress: {
    type: DataTypes.STRING(45),
    allowNull: true,
  },
  Allergies: {
    type: DataTypes.STRING(45),
    allowNull: true,
  },
  MemberDOB: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  Status: {
    type: DataTypes.STRING(45),
    defaultValue: 'Pending Approval',
  },
  Note: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
}, {
  tableName: 'PotentialCustomers',
  timestamps: true,
});

module.exports = PotentialCustomers;
