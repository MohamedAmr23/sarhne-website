import { Router } from "express";
import { signIn, signUp,verify  } from "./user.controller.js";
// import *  as signController from './user.controller.js' 
const userRouter=Router()

userRouter.post('/signup',signUp)
userRouter.post('/signin',signIn)
userRouter.get('/verify',verify)


export default userRouter
