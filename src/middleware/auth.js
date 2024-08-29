import  jwt  from "jsonwebtoken";

export const auth=async(req,res,next)=>{
    const token=req.header("token")
    jwt.verify(token,'mohamed',(err,decoded)=>{
        if (err) return res.json({msg:"error",err})
        req.userId=decoded.user._id
        next()    
    })
}