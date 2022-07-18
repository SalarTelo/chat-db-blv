const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const { offerValidation } = require('../../validations');
const { offerController } = require('../../controllers/index');

const router = express.Router();

router
  .route('/')
  .post(auth(), validate(offerValidation.createOffer), offerController.createOffer)
  .get(auth(), validate(offerValidation.getOffers), offerController.getOffers);

router.route('/cling').post(auth(), validate(offerValidation.createClingOffer), offerController.createOffer);

router
  .route('/:offerId')
  .get(auth(), validate(offerValidation.getOffer), offerController.getOffer)
  .delete(auth(), validate(offerValidation.deleteOffer), offerController.deleteOffer);

module.exports = router;
