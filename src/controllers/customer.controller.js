const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { customerService } = require('../services');
const pick = require('../utils/pick');

const createIndividualCustomer = catchAsync(async (req, res) => {
  const customer = await customerService.createIndividualCustomer(req.body);
  res.status(httpStatus.CREATED).send(customer);
});
const createCompanyCustomer = catchAsync(async (req, res) => {
  const customer = await customerService.createCompanyCustomer(req.body);
  res.status(httpStatus.CREATED).send(customer);
});
const getCustomers = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'role']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const customers = await customerService.queryCustomers(filter, options);
  res.status(httpStatus.CREATED).send(customers);
});
const getCustomer = catchAsync(async (req, res) => {
  const customer = await customerService.getCustomerById(req.params.customerId);
  res.status(httpStatus.CREATED).send(customer);
});
const deleteCustomer = catchAsync(async (req, res) => {
  await customerService.deleteCustomerById(req.params.customerId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createIndividualCustomer,
  createCompanyCustomer,
  getCustomers,
  getCustomer,
  deleteCustomer,
};
