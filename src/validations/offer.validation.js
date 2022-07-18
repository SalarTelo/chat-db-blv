const Joi = require('joi');
const { objectId } = require('./custom.validation');
const { productSpecification, payment } = require('./embeds.validation');

const deleteOffer = {
  params: Joi.object().keys({
    offerId: Joi.string().custom(objectId),
  }),
};
const getOffer = {
  params: Joi.object().keys({
    offerId: Joi.string().custom(objectId),
  }),
};
const getOffers = {
  query: Joi.object().keys({
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
    populate: Joi.string(),
  }),
};
const createOffer = {
  body: Joi.object().keys({
    customer: Joi.required().custom(objectId),
    salesperson: Joi.required().custom(objectId),
    products: Joi.array().items({
      product: productSpecification,
      cost: payment,
    }),
  }),
};
const createClingOffer = {
  body: Joi.object().keys({
    customer: Joi.required().custom(objectId),
    salesperson: Joi.required().custom(objectId),
    products: Joi.array().items({
      product: productSpecification,
      cost: payment,
    }),
    projectId: Joi.string().required(),
    documentId: Joi.string().required(),
  }),
};

module.exports = {
  getOffers,
  getOffer,
  createOffer,
  deleteOffer,
  createClingOffer,
};
