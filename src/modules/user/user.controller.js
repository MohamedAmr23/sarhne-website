import {userModel} from "../../../databases/models/user.model.js";
import bcrypt, { hash } from 'bcrypt'
import  jwt  from "jsonwebtoken";

export const signUp=async(req,res)=>{
    const {name,email,password,age}=req.body
    const user=await userModel.findOne({email})
    if(user) return res.json({msg:"email already exsit"})
     
        bcrypt.hash(password, 8,async function(err, hash) {
            await userModel.insertMany({name,email,password:hash,age})
            res.json({msg:"success"})
        });
    
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
  