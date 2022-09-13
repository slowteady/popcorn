const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    
});

router.get('/:id', (req, res) => {
    console.log(req.params, req.query);
});

module.exports = router;