const httpStatus = require('http-status');
const { Company, Individual, Customer } = require('../models');
const ApiError = require('../utils/ApiError');

const queryCustomers = async (filter, options) => {
  const customers = await Customer.paginate(filter, options);
  return customers;
};
const getCustomerById = async (id) => {
  return Customer.findById(id);
};
const createCompanyCustomer = async (customerBody) => {
  return Company.create(customerBody);
};
const createIndividualCustomer = async (customerBody) => {
  return Individual.create(customerBody);
};

const deleteCustomerById = async (id) => {
  const customer = await getCustomerById(id);
  if (!customer) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Customer not found');
  }
  await customer.remove();
  return customer;
};

module.exports = {
  queryCustomers,
  getCustomerById,
  createCompanyCustomer,
  createIndividualCustomer,
  deleteCustomerById,
};
