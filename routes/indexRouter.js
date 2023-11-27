const indexControllers = require('../controllers/mainController.js');
const express = require('express');
const router = express.Router();

router.get('/', indexControllers.index);

module.exports = router;
