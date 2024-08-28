import { Router } from "express";
import { signIn, signUp } from "./user.controller.js";
// import *  as signController from './user.controller.js' 
const userRouter=Router()

userRouter.post('/signup',signUp)
userRouter.post('/signin',signIn)


export default userRouter
