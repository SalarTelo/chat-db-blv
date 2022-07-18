const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema(
  {
    amount: {
      type: mongoose.SchemaTypes.Number,
      required: true,
    },
    currency: {
      type: mongoose.SchemaTypes.String,
      enum: ['SEK', 'USD', 'NOK', 'DKK'],
      required: false,
      default: 'SEK',
    },
  },
  { _id: false }
);

module.exports = paymentSchema;
