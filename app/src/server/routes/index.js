const express = require('express');
const ctrl = require('../../controller/home.ctrl');

const router = express.Router();

router.get('/', ctrl.login);

module.exports = router;