const mongoose = require('mongoose');
const Customer = require('./customer.model');

const individualSchema = new mongoose.Schema({
  firstName: {
    type: mongoose.SchemaTypes.String,
    trim: true,
    required: true,
  },
  lastName: {
    type: mongoose.SchemaTypes.String,
    trim: true,
    required: true,
  },
  personalNumber: {
    type: mongoose.SchemaTypes.String,
    unique: true,
    required: true,
  },
});

const IndividualModel = Customer.discriminator('Individual', individualSchema);

module.exports = IndividualModel;
