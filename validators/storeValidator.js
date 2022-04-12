'use strict';
const {check}= require('express-validator');
const {validateStore}=require('../utils/validate')

const validateCreate = [
    check('comercio').isString().notEmpty(),
    check('cuit').isString().notEmpty(),
    check('concepts').isArray().notEmpty(),
    check('currentBalance').isNumeric().notEmpty(),
    check('active').isBoolean().notEmpty(),
    

    (req, res, next) => validateStore(req, res, next)
]

module.exports = { validateCreate }