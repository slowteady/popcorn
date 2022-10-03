const express = require('express');
const bodyParser = require('body-parser');
const ctrl = require('../../controller/index.ctrl');

const router = express.Router();

// MiddleWare
router.use(bodyParser.json());

router.get('/', ctrl.output.index);
router.get('/login', ctrl.output.login);
router.get('/signup', ctrl.output.signup);
// router.get('/list', ctrl.output.list);

router.post('/login', ctrl.process.login);
router.post('/signup', ctrl.process.signup);

module.exports = router;