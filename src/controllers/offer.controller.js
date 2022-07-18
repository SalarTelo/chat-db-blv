const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { offerService } = require('../services');
const pick = require('../utils/pick');

const createOffer = catchAsync(async (req, res) => {
  const offer = await offerService.createOffer(req.body);
  res.status(httpStatus.CREATED).send(offer);
});
const getOffers = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'role']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const offers = await offerService.queryOffers(filter, options);

  res.status(httpStatus.CREATED).send(offers);
});
const getOffer = catchAsync(async (req, res) => {
  const offer = await offerService.getOfferById(req.params.offerId);
  res.status(httpStatus.CREATED).send(offer);
});
const deleteOffer = catchAsync(async (req, res) => {
  await offerService.deleteOfferById(req.params.offerId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createOffer,
  getOffers,
  getOffer,
  deleteOffer,
};
