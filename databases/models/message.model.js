import mongoose from "mongoose";

const messageSchema= mongoose.Schema({
    message:{
        type:String,
        require:true
    },
    receivdId:{
        type:mongoose.SchemaType.ObjectId,
        require:true,
    },
   
})

export default messageModel= mongoose.model('message',messageSchema)