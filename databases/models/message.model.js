import mongoose from "mongoose";

const messageSchema= mongoose.Schema({
    message:{
        type:String,
        required:true
    },
    receivdId:{
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
    },
   
})
export const messageModel= mongoose.model('message',messageSchema)