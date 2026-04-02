const rateLimit = require('express-rate-limit');

// 🚀 Global limiter
exports.globalLimiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 100, // max 100 requests per minute
  message: {
    message: "Too many requests, please try again later"
  },
  standardHeaders: true,
  legacyHeaders: false
});

// 🔐 Strict limiter for auth (login/register)
exports.authLimiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 2, // only 5 requests per minute
  message: {
    message: "Too many login attempts, try later"
  }
});