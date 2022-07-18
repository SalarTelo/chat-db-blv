const mongoose = require('mongoose');
const Department = require('./department.model');

const consultantSchema = new mongoose.Schema({
  country: {
    type: mongoose.SchemaTypes.String,
    required: true,
  },
});

const Consultant = Department.discriminator('Consultant', consultantSchema);
module.exports = Consultant;
