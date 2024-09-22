const express = require('express');
const router =express.Router();
const don = require('../controller/don');

router.get('/', don.index);
router.get('/index1', don.index1);
router.get('/index2', don.index2);
router.get('/index3', don.index3);
router.get('/index4', don.index4);

module.exports = router;
