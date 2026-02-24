const express = require('express');
const { TokenGenerator } = require('../middlewares/TokenGenerator.js');

const router = express.Router();

router.post('/login' , ( req , res ) => {
    const data = req.cookies?.login;
    if(data != undefined){
        return res.json({
            message : "Already logged in"
        })
    }
    console.log("Here is the body of the req : " , req.body);
    const token = TokenGenerator({
            email : req.body.email,
            password : req.body.password,
            type : req.body.type
        })
        console.log("Here is the generated token : " , token);
        res.cookie('login' , token);
    res.json({
        message : "Successful"
    })
})


module.exports = router;