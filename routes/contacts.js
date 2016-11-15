"use strict";
var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
var email_comfig = require("./../lib/email_config")


var transporter = nodemailer.createTransport(email_comfig);


router.route('/')
  .get(function(req, res){
    res.render('contact/contact');
  });

router.route('/sendemail')
  .post(function(req, res){
    var mailOptions = {
        from: "contato@acaiterrua.com.br",
        to: "contato@acaiterrua.com.br",
        subject: 'Email enviado por: '+ req.body.name,
        html: '<b>email:</b> '+req.body.email+'<br/>'+
        '<b>telefone:</b> '+req.body.phone+'<br/>'+
        '<b>mensagem:</b> '+req.body.message+'<br/>'
    };
    // transporter.sendMail(mailOptions,function(error, info){
    //   if(error){
    //     console.log(error);
    //   }
      console.log("email sent")
    // });

    res.redirect('/contact');
  });

module.exports = router;
