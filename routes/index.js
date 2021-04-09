const express = require('express');

const router = express.Router();
const indexController = require('../controllers/index_controller');

const dashboardController = require('../controllers/dashboard_controller');

router.get('/',indexController.crmModule);
// router.get('/dashBoard',dashboardController.dashBoard);

// router.use('/dashBoard',require('./dashboard'));
router.use('/customer',require('./customer'));

module.exports = router;