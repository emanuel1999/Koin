'use strict';
const logger = require('../utils/logger');
const express = require('express');
const router = express.Router();
const {validateCreate}=require('../validators/storeValidator');
const storeControllers=require('../controllers/storeControllers');
const auth=require('../middleware/basicAuth')
const {createData}=require('../seeders/seedStore')

router.get('/stores',auth.auth,storeControllers.getStore);
router.post('/stores',auth.auth,validateCreate,storeControllers.createStore);
router.get('/seeders',createData,(req,res)=>{
    res.json("Create")
})
module.exports = router;
