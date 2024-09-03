import {userModel} from "../../../databases/models/user.model.js";
import bcrypt, { hash } from 'bcrypt'
import  jwt  from "jsonwebtoken";
import { sendEmail } from "../../email/user.email.js";
import { AppError } from "../../utils/AppErr.js";

function catchError(fn){
    return(req,res,next)=>{
        fn(req,res,next).catch((err)=>{
           next(err)
        })
    }
}

export const signUp=catchError(async(req,res)=>{
    const {name,email,password,age}=req.body
    const user=await userModel.findOne({email})
    if(user) return next(new AppError("email already exsit",400)) 
     
        bcrypt.hash(password, 8,async function(err, hash) {
            await userModel.insertMany({name,email,password:hash,age})
            sendEmail({email})
            res.json({msg:"success"})
        });
    
  })

  export const verify=catchError(async()=>{
    const {email}=req.params
    await userModel.findByIdAndUpdate({email},{confirmedEmail:true})
    res.json({msg:"success"})
  })
  
export const signIn=catchError(async(req,res)=>{
   
    const {email,password}=req.body
    const user=await userModel.findOne({email})

    if(!user || (!await bcrypt.compare(password,user.password))) 
    {
        return next(new AppError("incorrect email or password",400)) 
    } 
    user.password=undefined
    const token=jwt.sign({user},'mohamed')
        res.json({msg:"login...",token})  
  }
  )