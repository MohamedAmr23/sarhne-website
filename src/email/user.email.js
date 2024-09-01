import nodemailer from 'nodemailer'
import  jwt  from "jsonwebtoken";

export const sendEmail=async(options)=>{
    const transporter = nodemailer.createTransport({
        service:"gmail",
         auth: {
           user: "amrm96754@gmail.com",
           pass: "jn7jnAPss4f63QBp6D",
         },
       });
       const token=jwt.sign({email:options.email},'mohamed')
       const info = await transporter.sendMail({
         from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>', 
         to: options.email, 
         subject: "Hello ✔", 
         text: "Hello world?",
         html: "<b>Hello world?</b>", 
       });
     console.log(info)
}
