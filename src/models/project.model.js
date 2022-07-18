const mongoose = require('mongoose');
const { autopopulate, toJSON, paginate } = require('./plugins');
const { ProductSpecificationEmbed } = require('../embeds/index');

const projectSchema = new mongoose.Schema({
  customer: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Customer',
    autopopulate: true,
  },
  projectLead: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Employee',
      autopopulate: true,
    },
  ],
  description: {
    type: mongoose.SchemaTypes.String,
    required: false,
  },
  assignments: [
    new mongoose.Schema(
      {
        task: {
          type: ProductSpecificationEmbed,
          required: true,
        },
        status: {
          type: mongoose.SchemaTypes.String,
          required: false,
          enum: ['NOT_STARTED', 'IN_PROGRESS', 'FINISHED', 'CANCELLED'],
          default: 'NOT_STARTED',
        },
        workers: [
          {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'Employee',
            autopopulate: true,
          },
        ],
      },
      { _id: false }
    ),
  ],
  status: {
    type: mongoose.SchemaTypes.String,
    required: false,
    enum: ['NOT_STARTED', 'IN_PROGRESS', 'APPROVED', 'REJECTED', 'CANCELLED'],
    default: 'NOT_STARTED',
  },
});
projectSchema.plugin(autopopulate);
projectSchema.plugin(toJSON);
projectSchema.plugin(paginate);

const Project = mongoose.model('Project', projectSchema);
module.exports = Project;
