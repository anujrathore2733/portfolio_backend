require('dotenv').config()
var path = require('path')
var express = require('express');
var email = require('emailjs/email')
var router = express.Router();
var nodemailer = require('nodemailer');




router.post('/sendmail', (req, res, next) => {
  console.table(req.body)

  const transporter = nodemailer.createTransport({
    service: 'gmail',//smtp.gmail.com  //in place of service use host...
    secure: false,//true
    port: 25,//465
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    }, tls: {
      rejectUnauthorized: false
    }
  });

 var  mailOptions = {
    from: process.env.EMAIL,
    to: "anujrathore2901@gmail.com",
    subject: "Mail Test",
    text: "helloo",
    
  }

  transporter.sendMail(mailOptions,(err,info)=>{
    if(err){
      console.log(err)
    }
    else{
      console.log(',sg sent')
    }
  })

})


router.get('/resume',(req,res,next)=>{
  res.download(path.join(__dirname,'../public','myresumeinternshala.pdf'))
})

module.exports = router;
