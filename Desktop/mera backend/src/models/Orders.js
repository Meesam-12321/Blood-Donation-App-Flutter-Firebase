const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Orders = sequelize.define('Orders', {
  OrderID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  CustomerID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Customer',
      key: 'CustomerID',
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  },
  DishIDsList: {
    type: DataTypes.STRING(45),
    allowNull: true,
  },
  OrderInstructions: {
    type: DataTypes.STRING(45),
    allowNull: true,
  },
  OrderCost: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  OrderPlaceDateTime: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  OrderCompleteDateTime: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  Status: {
    type: DataTypes.STRING(45),
    allowNull: true,
  },
}, {
  tableName: 'Orders',
  timestamps: true,
});

module.exports = Orders;
