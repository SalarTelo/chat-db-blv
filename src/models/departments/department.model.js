const mongoose = require('mongoose');
const { toJSON, paginate } = require('../plugins');

const departmentSchema = new mongoose.Schema(
  {
    employee: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Employee',
      required: true,
    },
  },
  {
    discriminatorKey: 'department',
  }
);

departmentSchema.plugin(toJSON);
departmentSchema.plugin(paginate);

const Department = mongoose.model('Department', departmentSchema);
module.exports = Department;
