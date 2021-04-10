const express = require('express');
const router = express.Router();

const customerController = require('../controllers/customer_controller');

router.post('/createCustomer',customerController.createCustomer);
router.post('/update/:id',customerController.update);
router.get('/destroy/:id',customerController.destroy);

module.exports = router; 