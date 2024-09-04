// models/PendingChangessss.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const PendingChanges = sequelize.define('PendingChanges', {
  PendingChangeID: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  CustomerID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  Field: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  PreviousValue: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  NewValue: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  Status: {
    type: DataTypes.STRING(45),
    defaultValue: 'Pending',
  },
}, {
  tableName: 'PendingChanges',
  timestamps: true,
});

module.exports = PendingChanges;
