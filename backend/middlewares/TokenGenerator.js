const jwt = require('jsonwebtoken');


const TokenGenerator = (prop) => {
    console.log("Entered the token generator and the prop is : " , prop);
    
    const token = jwt.sign({
        email : prop.email,
        password : prop.password,
        type : prop.type
    } , "RaufAhmadKhan" , { expiresIn : '1h' })

    return token;
}


const verifyToken = (token) => {
    return jwt.verify(token , "RaufAhmadKhan");
}


module.exports = { TokenGenerator , verifyToken };