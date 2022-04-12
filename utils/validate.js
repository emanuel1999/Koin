'use strict';
const {validationResult}= require('express-validator');

const validateStore = (req, res, next) => {
    try {
        validationResult(req).throw();
        return next();
    } catch (err) {
        return res.status(403).json({
            status: 'error',
            message: err.array()[0].msg,
        });
    }
}

module.exports={validateStore};