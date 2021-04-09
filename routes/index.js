const express = require('express');

const router = express.Router();
const indexController = require('../controllers/index_controller');

const dashboardController = require('../controllers/dashboard_controller');

router.get('/',indexController.index);

router.use('/dashBoard',dashboardController.dashBoard);


module.exports = router;