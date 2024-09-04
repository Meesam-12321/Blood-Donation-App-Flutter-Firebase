const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');



const Customer = sequelize.define('Customer', {
  CustomerID: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  Username: {
    type: DataTypes.STRING(45),
    unique: true,
  },
  Password: {
    type: DataTypes.STRING(64),
  },
  MemberID: {
    type: DataTypes.STRING(45),
  },
  MedicaidID: {
    type: DataTypes.STRING(45),
  },
  Name: {
    type: DataTypes.STRING(45),
  },
  Phone: {
    type: DataTypes.STRING(45),
  },
  ProfilePhotoPath: {
    type: DataTypes.STRING(45),
  },
  InsuranceCardPhotoPath: {
    type: DataTypes.STRING(45),
  },
  Address: {
    type: DataTypes.STRING(45),
  },
  DeliveryNote: {
    type: DataTypes.STRING(45),
  },
  PreferredDeliveryTime: {
    type: DataTypes.STRING(45),
  },
  AlternateContactName: {
    type: DataTypes.STRING(45),
  },
  AlternateContactPhone: {
    type: DataTypes.STRING(45),
  },
  AlternateContactAddress: {
    type: DataTypes.STRING(45),
  },
  Allergies: {
    type: DataTypes.STRING(45),
  },
  MemberDOB: {
    type: DataTypes.DATE,
  },
  IOType: {
    type: DataTypes.STRING(45),
  },
  AuthNumberFacets: {
    type: DataTypes.STRING(45),
  },
  StartDT: {
    type: DataTypes.DATE,
  },
  EndDT: {
    type: DataTypes.DATE,
  },
  ICD10Code: {
    type: DataTypes.STRING(45),
  },
  Status: {
    type: DataTypes.STRING(45),
  },
  SecurityQuestion: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  CoordinatorID: {
    type: DataTypes.INTEGER,
  },
  InsuranceID: {
    type: DataTypes.INTEGER,
  },
}, {
  tableName: 'Customer',
  timestamps: true,
});

module.exports = Customer;

