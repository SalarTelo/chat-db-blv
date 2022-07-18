const mongoose = require('mongoose');
const { paginate, toJSON, autopopulate } = require('../plugins');
const { ProductSpecificationEmbed, PaymentSpecificationEmbed } = require('../../embeds');

const offerSchema = new mongoose.Schema(
  {
    customer: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Customer',
      required: true,
      autopopulate: true,
    },
    salesperson: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Employee',
      required: true,
      autopopulate: true,
    },

    products: [
      new mongoose.Schema(
        {
          product: {
            type: ProductSpecificationEmbed,
            required: true,
          },
          cost: {
            type: PaymentSpecificationEmbed,
            required: true,
          },
        },
        { _id: false }
      ),
    ],
    totalAmount: {
      type: PaymentSpecificationEmbed,
      required: true,
    },
    status: {
      type: mongoose.SchemaTypes.String,
      enum: ['DRAFT', 'SENT', 'DENIED', 'ACCEPTED'],
      required: false,
      default: 'DRAFT',
    },

    answeredAt: {
      type: mongoose.SchemaTypes.Date,
      required: false,
      default: null,
    },
    deletedAt: {
      type: mongoose.SchemaTypes.Date,
      required: false,
      default: null,
    },
    sentAt: {
      type: mongoose.SchemaTypes.Date,
      required: false,
      default: Date.now,
    },
  },
  {
    discriminatorKey: 'type',
  }
);

offerSchema.plugin(paginate);
offerSchema.plugin(autopopulate);
offerSchema.plugin(toJSON);

const Offer = mongoose.model('Offer', offerSchema);
module.exports = Offer;
