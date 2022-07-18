const mongoose = require('mongoose');
const Department = require('./department.model');

const projectLeadSchema = new mongoose.Schema({
  projects: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Project',
    },
  ],
});

const ProjectLead = Department.discriminator('ProjectLead', projectLeadSchema);
module.exports = ProjectLead;
