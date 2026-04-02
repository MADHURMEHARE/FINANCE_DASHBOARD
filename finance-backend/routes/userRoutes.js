const router = require('express').Router();
const { auth } = require('../middleware/authMiddleware');
const { authorize } = require('../middleware/roleMiddleware');
const { getUsers, updateUserStatus } = require('../controllers/userController');

router.get('/', auth, authorize('admin'), getUsers);
router.put('/:id/status', auth, authorize('admin'), updateUserStatus);

module.exports = router;