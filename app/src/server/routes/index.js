const express = require('express');
const ctrl = require('../../controller/home.ctrl');

const router = express.Router();

router.get('/', ctrl.index);

module.exports = router;