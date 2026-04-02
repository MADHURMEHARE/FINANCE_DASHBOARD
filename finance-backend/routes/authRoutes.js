const router = require('express').Router();
const { register, login } = require('../controllers/authController.js');
const { authLimiter } = require('../middleware/rateLimiter');

router.post('/register', authLimiter, register);
router.post('/login', authLimiter, login);

module.exports = router;