const sales = ['manageCustomers', 'manageOffers', 'manageOrders'];
const projectLead = ['manageProjects', ...sales];
const admin = ['manageUsers', ...projectLead];

const allRoles = {
  sales,
  projectLead,
  admin,
};

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

module.exports = {
  roles,
  roleRights,
};
