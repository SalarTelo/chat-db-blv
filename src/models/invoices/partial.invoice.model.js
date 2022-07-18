const mongoose = require('mongoose');
const Invoice = require('./invoice.model');

const partialInvoiceSchema = new mongoose.Schema({
  previousInvoice: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Invoice',
    required: false,
    default: null,
  },
  nextInvoice: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Invoice',
    required: false,
    default: null,
  },
  isLast: {
    type: mongoose.SchemaTypes.Boolean,
    required: false,
    default: false,
  },
});

const PartialInvoiceModel = Invoice.discriminator('Partial', partialInvoiceSchema);
module.exports = PartialInvoiceModel;
