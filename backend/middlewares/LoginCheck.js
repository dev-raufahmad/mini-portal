const { verifyToken }  = require('../middlewares/TokenGenerator.js')


const LoginCheck = (req, res, next) => {
    console.log("Entered the login check");
    const token = req.cookies?.login;
    if(token == undefined){
        return res.redirect('/login');
    }
    try {
        verifyToken(token);
        console.log("Login verified");
        return next();
    } catch (error) {
        console.log("Here is the error part of the logincheck");
        return res.redirect('/login');
    }
    // console.log("Here is the start of the validator : " , );
    // let data ;
    // if(token){
    //     try {
    //         data = verifyToken(token);
    //     } catch (error) {
    //         res.clearCookie('login');
    //         console.log("Here is the error of the token checker : " , error);
    //         return res.json({
    //             message : "Please login again"
    //         })
    //     }
    //     console.log("Here is the result of the validator of the login token : " , data);
    //     console.log("Have a login token and the token is : " , token);
    //     return next();
    // }else{
    //     console.log("Doesn't contain login token");
    //     res.json({
    //         message : "Please login again"
    //     })
    // }
}

module.exports = LoginCheck