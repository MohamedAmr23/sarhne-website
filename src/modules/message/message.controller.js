import {messageModel} from "../../../databases/models/message.model.js"

export const addMsg=async()=>{
    const { message , receivdId }=req.body
    await messageModel.insertMany({message,receivdId})
    res.json({msg:'success'})
}
export const getMsg=async()=>{
    const  id =req.userId
    const message= await messageModel.find({receivdId:id})
     res.json({msg:'success',message})
}
export const deleteMsg=async()=>{
    const { id }=req.body
    const deleted= await messageModel.findByIdAndDelete(id)
     res.json({msg:'deleted',deleted})
}