const express = require('express');
const controller = require('../../../controllers/front/auth.controller');
const router = express.Router();

router.route('/register').post(controller.register);

module.exports = router;