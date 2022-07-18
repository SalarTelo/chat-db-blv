const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const { customerValidation } = require('../../validations');
const { customerController } = require('../../controllers/index');

const router = express.Router();

router.route('/').get(auth(), validate(customerValidation.getCustomers), customerController.getCustomers);

router
  .route('/company')
  .get(auth(), validate(customerValidation.createCompanyCustomer), customerController.createCompanyCustomer);
router
  .route('/individual')
  .get(auth(), validate(customerValidation.createIndividualCustomer), customerController.createIndividualCustomer);

router
  .route('/:customerId')
  .get(auth(), validate(customerValidation.getCustomer), customerController.getCustomer)
  .delete(auth(), validate(customerValidation.deleteCustomer), customerController.deleteCustomer);

module.exports = router;
