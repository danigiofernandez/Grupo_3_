const express = require('express');
const router = express.Router();
const mainControllers = require('../controllers/mainControllers');

router.get('/cart', mainControllers.cart);

module.exports = router;