const mongoose = require('mongoose');
const Invoice = require('./invoice.model');

const creditInvoiceSchema = new mongoose.Schema({
  reason: {
    type: mongoose.SchemaTypes.String,
    required: false,
    default: '',
  },
});

const CreditInvoiceModel = Invoice.discriminator('CreditInvoiceModel', creditInvoiceSchema);
module.exports = CreditInvoiceModel;
