const mongoose = require('mongoose');
const { AddressEmbed } = require('../../embeds/index');
const { toJSON, paginate } = require('../plugins');

const orderSchema = new mongoose.Schema(
  {
    customer: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Customer',
      required: true,
    },
    salesperson: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Sales',
      required: true,
    },
    property: {
      type: AddressEmbed,
      required: true,
    },
    totalCost: {
      type: mongoose.SchemaTypes.Number,
      required: false,
      default: 0,
    },
  },
  {
    discriminatorKey: 'type',
  }
);

orderSchema.plugin(toJSON);
orderSchema.plugin(paginate);

const OrderModel = mongoose.model('Order', orderSchema);
module.exports = OrderModel;
