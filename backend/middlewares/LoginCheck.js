const { verifyToken }  = require('../middlewares/TokenGenerator.js')


const LoginCheck = (req, res, next) => {
    console.log("Entered the login check");
    const token = req.cookies?.login;
    console.log("Here is the start of the validator : " , );
    let data ;
    if(token){
        try {
            data = verifyToken(token);
        } catch (error) {
            res.clearCookie('login');
            console.log("Here is the error of the token checker : " , error);
        }
        console.log("Here is the result of the validator of the login token : " , data);
        
        res.redirect('/login');
        console.log("Have a login token and the token is : " , token);
        
    }else{
        console.log("Doesn't contain login token");
        next();
    }
}

module.exports = LoginCheck