const rateLimit = require('express-rate-limit');

const analyzeLimiter = rateLimit({

    windowMs: 15 * 60 * 1000,

    max: 10,

    message: {
        error: "Too many analyze requests. Try again after 15 minutes."
    },

    standardHeaders: true,

    legacyHeaders: false

});

module.exports = analyzeLimiter;