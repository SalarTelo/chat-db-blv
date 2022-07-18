const mongoose = require('mongoose');
const Invoice = require('./invoice.model');

const subscriptionInvoiceSchema = new mongoose.Schema({
  
});

const PartialInvoiceModel = Invoice.discriminator('Subscription', subscriptionInvoiceSchema);
module.exports = PartialInvoiceModel;
