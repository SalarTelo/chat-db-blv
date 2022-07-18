const mongoose = require('mongoose');
const { toJSON, paginate } = require('../plugins');
const { AddressEmbed } = require('../../embeds');

const customerSchema = new mongoose.Schema(
  {
    contact: {
      type: new mongoose.Schema(
        {
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
          phoneNumber: {
            type: mongoose.SchemaTypes.String,
            trim: true,
            lowercase: true,
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
      required: true,
    },
    address: {
      type: AddressEmbed,
      required: true,
    },
    billingAddress: {
      type: AddressEmbed,
      required: false,
    },
  },
  {
    discriminatorKey: 'type',
    timestamps: true,
  }
);
customerSchema.plugin(toJSON);
customerSchema.plugin(paginate);
const Customer = mongoose.model('Customer', customerSchema);
module.exports = Customer;
