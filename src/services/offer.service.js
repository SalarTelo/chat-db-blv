const httpStatus = require('http-status');
const { Offer } = require('../models');
const { ClingOffer } = require('../models/offers');
const ApiError = require('../utils/ApiError');

const queryOffers = async (filter, options) => {
  const offers = await Offer.paginate(filter, options);
  return offers;
};
const getOfferById = async (id) => {
  return Offer.findById(id);
};
const createClingOffer = async (offerBody) => {
  return ClingOffer.create(offerBody);
};
const createOffer = async (offerBody) => {
  return Offer.create(offerBody);
};
const deleteOfferById = async (id) => {
  const offer = await getOfferById(id);
  if (!offer) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Offer not found');
  }
  await offer.remove();
  return offer;
};

module.exports = {
  queryOffers,
  getOfferById,
  createOffer,
  createClingOffer,
  deleteOfferById,
};
