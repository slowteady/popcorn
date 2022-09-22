const express = require('express');
const ctrl = require('../../controller/home.ctrl');

const router = express.Router();

router.get('/', ctrl.output.index);
router.get('/login', ctrl.output.login);
router.get('/register', ctrl.output.register);
router.post('/login', ctrl.process.login);

module.exports = router;