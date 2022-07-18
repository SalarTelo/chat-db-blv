const rights = {
  read: 'r',
  write: 'w',
  readWrite: 'rw',
};
const categories = {
  user: {
    all: 'allUsers',
  },
  project: {
    all: 'allProjects',
  },
  department: {
    all: 'allDepartments',
    sales: 'salesDepartment',
    projectLead: 'projectLeadDepartment',
    consultant: 'consultantDepartment',
    constructor: 'constructorDepartment',
  },
  customer: {
    all: 'allCustomers',
    company: 'companyCustomer',
    individual: 'individualCustomer',
  },
  employee: {
    all: 'allEmployees',
  },
  invoice: {
    all: 'allInvoices',
    cling: 'clingInvoice',
  },
  orders: {
    all: 'allOrders',
  },
};

module.exports.categories = categories;
module.exports.rights = rights;
module.exports.presets = {
  admin: [
    {
      type: categories.customer.all,
      rights: rights.readWrite,
    },
    {
      type: categories.department.all,
      rights: rights.readWrite,
    },
    {
      type: categories.user.all,
      rights: rights.readWrite,
    },
    {
      type: categories.employee.all,
      rights: rights.readWrite,
    },
    {
      type: categories.orders.all,
      rights: rights.readWrite,
    },
    {
      type: categories.invoice.all,
      rights: rights.readWrite,
    },
    {
      type: categories.project.all,
      rights: rights.readWrite,
    },
  ],
  sales: [
    {
      type: categories.customer.all,
      rights: rights.readWrite,
    },
    {
      type: categories.department.all,
      rights: rights.readWrite,
    },
    {
      type: categories.orders.all,
      rights: rights.readWrite,
    },
    {
      type: categories.invoice.all,
      rights: rights.readWrite,
    },
  ],
  projectLead: [
    {
      type: categories.customer.all,
      rights: rights.readWrite,
    },
    {
      type: categories.department.all,
      rights: rights.readWrite,
    },
    {
      type: categories.orders.all,
      rights: rights.readWrite,
    },
    {
      type: categories.invoice.all,
      rights: rights.readWrite,
    },
    {
      type: categories.project.all,
      rights: rights.readWrite,
    },
  ],
};
