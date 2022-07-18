const mongoose = require('mongoose');
const Department = require('./department.model');

const constructorSchema = new mongoose.Schema({
  assignments: [
    // TODO: Add ref to an assignment
    new mongoose.Schema({
      task: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Task',
      },
      startedAt: {
        type: mongoose.SchemaTypes.Date,
        required: false,
        default: Date.now,
      },
      finishedAt: {
        type: mongoose.SchemaTypes.Date,
        required: false,
        default: null,
      },
      status: {
        type: mongoose.SchemaTypes.String,
        enum: ['IN_PROGRESS', 'FINISHED', 'CANCELLED', 'PAUSED'],
        default: 'IN_PROGRESS',
        required: false,
      },
    }),
  ],
});
const Constructor = Department.discriminator('Constructor', constructorSchema);
module.exports = Constructor;
