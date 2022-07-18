const mongoose = require('mongoose');
const { autopopulate, paginate, toJSON } = require('../plugins/index');

const invoiceSchema = new mongoose.Schema(
  {
    amountDue: {
      type: mongoose.SchemaTypes.Number,
      required: true,
    },
    OCR: {
      type: mongoose.SchemaTypes.String,
      required: true,
    },
    invoiceNumber: {
      type: mongoose.SchemaTypes.Number,
      required: true,
    },
    customer: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Customer',
      required: true,
      autopopulate: true,
    },
    dueAt: {
      type: mongoose.SchemaTypes.Date,
      required: true,
    },
    sentAt: {
      type: mongoose.SchemaTypes.Date,
      required: false,
      immutable: true,
      default: Date.now,
    },
    status: {
      type: mongoose.SchemaTypes.String,
      enum: ['NOT_PAID', 'PAID', 'REFUNDED', 'COLLECTION', 'KRONOFOGDEN'],
      required: false,
      default: 'NOT_PAID',
      uppercase: true,
    },
  },
  {
    discriminatorKey: 'type',
  }
);
invoiceSchema.plugin(toJSON);
invoiceSchema.plugin(paginate);
invoiceSchema.plugin(autopopulate);

const Invoice = mongoose.model('Invoice', invoiceSchema);
module.exports = Invoice;
