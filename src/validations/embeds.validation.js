const Joi = require('joi');
const { objectId } = require('./custom.validation');

const productSpecification = Joi.object().keys({
  customer: Joi.required().custom(objectId),
  salesperson: Joi.required().custom(objectId),
  products: Joi.array().items({
    product: Joi.object().keys({
      squareMeter: Joi.number().required(),
      material: Joi.string().required(),
      floorPlan: Joi.string().required(),
      constructionType: Joi.string().required(),
      actionType: Joi.string().required(),
      type: Joi.string().required(),
    }),
  }),
});

const address = Joi.object().keys({
  zipCode: Joi.string(),
  municipality: Joi.string(),
  city: Joi.string(),
  streetName: Joi.string(),
  streetNumber: Joi.string(),
  propertyDesignations: Joi.array().items(Joi.string()),
});

const payment = Joi.object().keys({
  amount: Joi.number().required(),
  currency: Joi.string(),
});

module.exports = {
  productSpecification,
  address,
  payment,
};
