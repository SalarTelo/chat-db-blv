const mongoose = require('mongoose');
const Offer = require('./offer.model');

const clingOfferSchema = new mongoose.Schema({
  projectId: {
    type: mongoose.SchemaTypes.String,
    required: true,
  },
  documentId: {
    type: mongoose.SchemaTypes.String,
    required: true,
  },
});

const ClingOffer = Offer.discriminator('Cling', clingOfferSchema);
module.exports = ClingOffer;
