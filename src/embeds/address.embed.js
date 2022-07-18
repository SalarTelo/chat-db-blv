const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema(
  {
    zipCode: {
      type: mongoose.SchemaTypes.String,
      trim: true,
      required: false,
    },
    municipality: {
      type: mongoose.SchemaTypes.String,
      trim: true,
      lowercase: true,
      // TODO: add validation;

      required: false,
    },
    propertyDesignations: [
      {
        type: mongoose.SchemaTypes.String,
        uppercase: true,
        trim: true,
        // TODO: add validation;
      },
    ],
    city: {
      type: mongoose.SchemaTypes.String,
      trim: true,
      lowercase: true,
      required: false,
    },
    streetName: {
      type: mongoose.SchemaTypes.String,
      trim: true,
      lowercase: true,
      required: false,
    },
    streetNumber: {
      type: mongoose.SchemaTypes.String,
      trim: true,
      required: false,
    },
  },
  { _id: false }
);

module.exports = addressSchema;
