const Joi = require('joi');
const { objectId } = require('./custom.validation');
const { address } = require('./embeds.validation');

const contact = Joi.object().keys({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  phoneNumber: Joi.string(),
  email: Joi.string(),
});
const customerBase = {
  contact: contact.required(),
  address: address.required(),
  billingAddress: address,
};

const createIndividualCustomer = Joi.object().keys({
  ...customerBase,
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  personalNumber: Joi.string().required(),
});
const createCompanyCustomer = Joi.object().keys({
  ...customerBase,
  organizationalName: Joi.string().required(),
  organizationalNumber: Joi.string().required(),
});

const deleteCustomer = {
  params: Joi.object().keys({
    customerId: Joi.string().custom(objectId),
  }),
};
const getCustomer = {
  params: Joi.object().keys({
    customerId: Joi.string().custom(objectId),
  }),
};
const getCustomers = {
  query: Joi.object().keys({
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

module.exports = {
  createIndividualCustomer,
  createCompanyCustomer,
  getCustomers,
  getCustomer,
  deleteCustomer,
};
