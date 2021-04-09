const express = require('express');

const router = express.Router();
const indexController = require('../controllers/index_controller');

const dashboardController = require('../controllers/dashboard_controller');

router.get('/',indexController.index);
router.get('/dashBoard',dashboardController.dashBoard);

router.use('/dashBoard',require('./dashboard'));

module.exports = router;