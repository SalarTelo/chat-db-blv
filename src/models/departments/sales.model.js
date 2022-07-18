const mongoose = require('mongoose');
const Department = require('./department.model');

const salesSchema = new mongoose.Schema({
  offers: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Offer',
    },
  ],
  orders: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Order',
    },
  ],
  totalRevenue: {
    type: mongoose.SchemaTypes.Number,
    required: false,
    default: 0,
  },
});

const Sales = Department.discriminator('Sales', salesSchema);
module.exports = Sales;
