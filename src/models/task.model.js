const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  worker: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Employee',
    required: true,
  },
  project: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Project',
    required: false,
  },
  description: {
    type: mongoose.SchemaTypes.String,
    required: true,
  },
  status: {
    type: mongoose.SchemaTypes.String,
    enum: ['IN_PROGRESS', 'CANCELLED', 'FINISHED', 'NOT_STARTED'],
    required: false,
    default: 'NOT_STARTED',
  },
  assignedAt: {
    type: mongoose.SchemaTypes.Date,
    required: false,
    default: Date.now,
  },
  finishedAt: {
    type: mongoose.SchemaTypes.Date,
    required: false,
    default: null,
  },
});
