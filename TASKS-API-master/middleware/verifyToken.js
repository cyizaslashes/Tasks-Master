const jwt = require("jsonwebtoken");
const {createError} = require("./error");


// VERIFY TOKEN
const verifyToken = (req,res,next)=>{
    const authHeader = req.headers.authorization;
   
    
    if(!authHeader || !authHeader.startsWith("Bearer ")){
        res.status(403).json({message: "forbidden to Access"})
    }
    else{
        const token = authHeader.split(" ")[1];
        const user = jwt.verify(token,process.env.JWT_SECRET,(err,user) =>{
            if(err){
                throw new Error('wrong token')
            } 
            return user;
        });
        
        req.user = user;
        next()
    }
}


const verifyUser = async(req,res,next)=>{
    verifyToken(req,res,() =>{
        if(req.user.id=== req.params.id){
            next();
        }

})

}

    module.exports = {verifyToken, verifyUser}