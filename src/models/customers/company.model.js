const mongoose = require('mongoose');
const BaseCustomer = require('./customer.model');

const companyCustomerSchema = new mongoose.Schema({
  organizationalName: {
    type: mongoose.SchemaTypes.String,
    trim: true,
    required: true,
  },
  organizationalNumber: {
    type: mongoose.SchemaTypes.String,
    unique: true,
    trim: true,
    required: true,
  },
});

const Company = BaseCustomer.discriminator('Company', companyCustomerSchema);
module.exports = Company;
