const express = require('express')
const loginCheck = require('../middlewares/LoginCheck.js')
const fs = require('fs');
const router = express.Router();


router.post('/:id/addcourse',loginCheck , async ( req , res ) => {
    console.log("Here is the body of the req : " , req.body);
    console.log("Here is the params data : " , req.params);
    const data = await fs.readFileSync('./CourseName.json' , 'utf-8');
    const array = JSON.parse(data);
    const check = array.find((element) => element.coursename == req.body.courseName);
    if(check){
        return res.json({
            message : "Course already exists"
        })
    }
    array.push({
        coursename : req.body.courseName,
        credithours : req.body.credithours,
        haslab : req.body.haslab,
        professors : []
    })
    console.log("NOw the array is : " , array);
    fs.writeFileSync('./CourseName.json' , JSON.stringify(array));
    
    res.json({
        message : "Successful"
    })
})



module.exports = router;