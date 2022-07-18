const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');
const { AddressEmbed } = require('../embeds');

const employeeSchema = new mongoose.Schema({
  firstName: {
    type: mongoose.SchemaTypes.String,
    trim: true,
    lowercase: true,
    required: true,
  },
  lastName: {
    type: mongoose.SchemaTypes.String,
    trim: true,
    lowercase: true,
    required: true,
  },

  contact: {
    type: new mongoose.Schema(
      {
        address: {
          type: AddressEmbed,
          required: false,
        },
        phoneNumber: {
          type: mongoose.SchemaTypes.String,
          trim: true,
          required: false,
        },
        email: {
          type: mongoose.SchemaTypes.String,
          trim: true,
          lowercase: true,
          required: false,
        },
      },
      { _id: false }
    ),
    required: false,
  },
  bank: {
    type: new mongoose.Schema(
      {
        // TODO: Check what fields are necessary for banking information
      },
      { _id: false }
    ),
    required: false,
  },
});
employeeSchema.plugin(toJSON);
employeeSchema.plugin(paginate);
const Employee = mongoose.model('Employee', employeeSchema);
module.exports = Employee;
