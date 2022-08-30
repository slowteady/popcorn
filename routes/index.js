const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    next();
});

router.get('/', (req, res, next) => {
    res.send('POPCORN!');
});

module.exports = router;