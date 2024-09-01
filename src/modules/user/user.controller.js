import {userModel} from "../../../databases/models/user.model.js";
import bcrypt, { hash } from 'bcrypt'
import  jwt  from "jsonwebtoken";
import { sendEmail } from "../../email/user.email.js";

export const signUp=async(req,res)=>{
    const {name,email,password,age}=req.body
    const user=await userModel.findOne({email})
    if(user) return res.json({msg:"email already exsit"})
     
        bcrypt.hash(password, 8,async function(err, hash) {
            await userModel.insertMany({name,email,password:hash,age})
            sendEmail({email})
            res.json({msg:"success"})
        });
    
  }

  export const verify=async()=>{
    const {email}=req.params
    await userModel.findByIdAndUpdate({email},{confirmedEmail:true})
    res.json({msg:"success"})
  }
  
export const signIn=async(req,res)=>{
   
    const {email,password}=req.body
    const user=await userModel.findOne({email})

    if(!user || (!await bcrypt.compare(password,user.password))) 
    {
        return res.json({msg:"invalid email or password"})
    } 
    user.password=undefined
    const token=jwt.sign({user},'mohamed')
        res.json({msg:"login...",token})  
  }
  