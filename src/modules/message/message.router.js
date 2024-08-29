import { Router } from "express";
import { addMsg, deleteMsg, getMsg } from "./message.controller.js";
import { auth } from "../../middleware/auth.js";
const messageRouter=Router()

messageRouter.post('/',addMsg)
messageRouter.get('/',auth,getMsg)
messageRouter.delete('/',auth,deleteMsg)

export default messageRouter