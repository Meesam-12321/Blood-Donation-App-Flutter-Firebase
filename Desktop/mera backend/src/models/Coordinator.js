const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Coordinator = sequelize.define('Coordinator', {
  CoordinatorID: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  Name: {
    type: DataTypes.STRING(45),
    allowNull: true,
  },
  Phone: {
    type: DataTypes.STRING(45),
    allowNull: true,
  },
  Email: {
    type: DataTypes.STRING(45),
    allowNull: true,
  },
}, {
  tableName: 'Coordinator',
  timestamps: true,
});

module.exports = Coordinator;
