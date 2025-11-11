const nodemailer=require('nodemailer');
require("dotenv").config();

const transporter =nodemailer.createTransport({
    secure :true,
    host:'smtp.gmail.com',
    port:465,
    auth:{
        user:'pantpriyanshu707@gmail.com',
        pass:process.env.password
    }
})



function sendMail(to,sub,msg){
    transporter.sendMail({
        to:to,
        subject:sub,
        html:msg
    });
    console.log("email sent");
}



sendMail("pantpriyanshu707@gmail.com","this is subject","Aur marij kaisa h");