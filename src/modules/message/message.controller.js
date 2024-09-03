import {messageModel} from "../../../databases/models/message.model.js"

function catchError(fn){
    return(req,res,next)=>{
        fn(req,res,next).catch((err)=>{
           next(err)
        })
    }
}
export const addMsg=catchError(
    async()=>{
        const { message , receivdId }=req.body
        await messageModel.insertMany({message,receivdId})
        res.json({msg:'success'})
    }
)
export const getMsg=catchError(async()=>{
    const  id =req.userId
    const message= await messageModel.find({receivdId:id})
     res.json({msg:'success',message})
})
export const deleteMsg=catchError(async()=>{
    const { id }=req.body
    const deleted= await messageModel.findByIdAndDelete(id)
     res.json({msg:'deleted',deleted})
})