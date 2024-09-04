const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Dishes = sequelize.define('Dishes', {
  MenuID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  VendorID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  DishID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  DishName: {
    type: DataTypes.STRING(45),
    allowNull: true,
  },
  DishCategory: {
    type: DataTypes.STRING(45),
    allowNull: true,
  },
  DishDescription: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  DishTags: {
    type: DataTypes.STRING(45),
    allowNull: true,
  },
  DishDetails: {
    type: DataTypes.STRING(45),
    allowNull: true,
  },
  DishRating: {
    type: DataTypes.DECIMAL(10, 1),
    allowNull: true,
  },
  DishPhotoPath: {
    type: DataTypes.STRING(45),
    allowNull: true,
  },
  DishStatus: {
    type: DataTypes.STRING(45),
    allowNull: true,
  },
}, {
  tableName: 'Dishes',
  timestamps: true,
});

module.exports = Dishes;
