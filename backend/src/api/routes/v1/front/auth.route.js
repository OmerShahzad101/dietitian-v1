const express = require('express');
const controller = require('../../../controllers/front/auth.controller');
const router = express.Router();

router.route('/register').post(controller.register);
router.route('/contact').post(controller.contact);
router.route('/authOTP').post(controller.authOTP);

module.exports = router;