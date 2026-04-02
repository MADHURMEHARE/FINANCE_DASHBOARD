const router = require('express').Router();
const { auth } = require('../middleware/authMiddleware');
const { authorize } = require('../middleware/roleMiddleware');
const { getSummary } = require('../controllers/dashboardController');

router.get('/', auth, authorize('analyst','admin'), getSummary);

module.exports = router;