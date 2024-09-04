const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Insurance = sequelize.define('Insurance', {
  InsuranceID: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  AuthUnitsApproved: {
    type: DataTypes.INTEGER,
  },
  CPT: {
    type: DataTypes.STRING(45),
  },
  Frequency: {
    type: DataTypes.STRING(45),
  },
  Note: {
    type: DataTypes.STRING(100),
  },
}, {
  tableName: 'Insurance',
  timestamps: true,
});

module.exports = Insurance;
