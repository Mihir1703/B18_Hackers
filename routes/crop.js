const express = require('express');
const statusCode = require('http-status-codes')
const Crop = require('../models/Crop');
const router = express.Router();

router.get('/:crop/:dist',async (req,res)=>{
    Crop.getDataByCrop(req.params.crop,req.params.dist,(err,data)=>{
        if(err){
            res.status(statusCode.StatusCodes.INTERNAL_SERVER_ERROR).json({success:false})
        }
        else{
            res.send(data)
        }
    })
})

module.exports = router