import mongoose from "mongoose";

const userSchema= mongoose.Schema({
    name:{
        type:String,
        minLength:[2,'too short'],
        maxLength:[15,'name too long'],
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        minLength:[2,'too short'],
        require:true
    },
    age:{
        type:Number,
        min:10,
        max:80
    },
    confirmedEmail:{
        type:Boolean,
        default:false 
    }
})

export default userModel= mongoose.model('user',userSchema)