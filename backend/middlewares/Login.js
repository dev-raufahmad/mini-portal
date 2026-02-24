const Login = (req , res , next) => {
    const data = req.cookies?.login;
    if(data == undefined){
        return res.redirect('/login');
    }
    return next();
}




module.exports = Login