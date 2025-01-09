var nodejsmailer  = require('nodemailer'); // use mailer nodejs module
var mailOptions ={
    from:'shreyashdivekar.numetry@gmail.com',
    to:'shreyashdivekar831@gmail.com',
    subject:"Sending Email to Shreyash",
    text:"Welcome to NodeMailer, It's Working",
    html: '<h1>Welcome</h1><p>That was easy!</p>',
    // attachments: [
    //     { filename: 'txt.txt', path: './txt.txt' }
    //  ]
}    
var transporter = nodejsmailer.createTransport({
    service:'gmail',
    auth:{
        user:'shreyashdivekar.numetry@gmail.com',
        pass:'nyga kzsw dsya idrg'      // note: always keep password in .env file to keep it hidden
    }
});

transporter.sendMail(mailOptions,function(error,info){
     if(error){
         console.log(error);
     }else{
         console.log('Email Send ' + info.response);
     }
});