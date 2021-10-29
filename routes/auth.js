const express = require('express');
const statusCode = require('http-status-codes')
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var fetchuser = require('../middleware/fetchuser');
const config = require('../app-config.json');
const JWT_SECRET = config.JWT_SECRET;


router.post('/createuser', [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('uid', 'Enter a valid uid').isLength({ min: 16,max:16 }),
    body('phone', 'Enter a valid phone number').isMobilePhone(),
    body('password', 'Password must be atleast 5 characters').isLength({ min: 5 }),
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        console.log(req.body.uid)
        await User.findOne({ uid:req.body.uid }, async (err,data) => {
            if(err){
                res.status(400).json({ success:false, error: "Sorry an error occured" })
                return
            }
            if (data != null) {
                res.status(400).json({ success:false, error: "Sorry a user with this Aadhar number already exists" })
                return
            } else {
                const salt = await bcrypt.genSalt(config.salt);
                const secPass = await bcrypt.hash(req.body.password, salt);

                User.create({
                    name: req.body.name,
                    uid: req.body.uid,
                    password: secPass,
                    phone: req.body.phone
                }, (err, data) => {
                    if (data) console.log(data)
                    
                const send = {
                    user: {
                        uid: req.body.uid
                    }
                }
                const authtoken = jwt.sign(send, JWT_SECRET);
                res.json({success:true, authtoken })
                })
            }
        })

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})
router.post('/login', [
    body('uid', 'Enter a valid email').isLength({min:16,max:16}),
    body('password', 'Password cannot be blank').exists(),
], async (req, res) => {
    const { uid, password } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        await User.findPassword({ uid:uid }, async (err, data) => {
            if (data == null) {
                res.status(200).json({ error: "Please try to login with correct credentials" });
                return
            } else {
                let success = false;
                const passwordCompare = await bcrypt.compare(password, data);
                if (!passwordCompare) {
                    success = false
                    res.status(400).json({ success, error: "Please try to login with correct credentials" });
                    return
                } else {
                    const data = {
                        user: {
                            uid: uid
                        }
                    }
                    const authtoken = jwt.sign(data, JWT_SECRET);
                    success = true;
                    res.json({ success, authtoken })
                }
            }
        })

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }


});

router.post('/getuser', fetchuser, async (req, res) => {

    try {
        uid = req.uid;
        await User.findOne({uid},(err,data)=>{
            if(err) {
                res.status(statusCode.StatusCodes.INTERNAL_SERVER_ERROR).send({status:false,reason:"Internal server Error"})
                return
            }
            if(data != null){
                res.send({ success: true, user: data.name,uid:data.uid })
                return
            }else{
                res.send({success:false})
            }
        })
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})
module.exports = router