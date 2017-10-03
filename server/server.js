const nodemailer = require('nodemailer');
const express = require('express');
var bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))


let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'kostyaokylich@gmail.com',
        pass: '*************************'
    }
});

app.all("/*", function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  next();
});

app.post('/sendmail', function (req, res) {
 // res.send(req.body);
  let mailOptions = {
    from: `${req.body.email}`,
    to: 'Okylich@tut.by',
    subject: `От ${req.body.firstname} ${req.body.lastname}`,
    text: `${req.body.message}`,
    html: `${req.body.html}`
 };
  transporter.sendMail(mailOptions, (error) => {
       if (error) {
           return console.log(error);
       }else{
        res.send('200')
       }
    });
 })

app.post('/subscription', function (req, res) {
 // res.send(req.body);
  let mailOptions = {
    from: 'Барановичская библиотека инструментов.',
    to: `${req.body.email}`,
    subject: 'Барановичская библиотека инструментов.',
    message: 'Подписка на новости.',
    html: ` <p>Уважаемый<strong> ${req.body.firstname} ${req.body.lastname}</strong>,</p>
            <p>Данный адрес электронной почты был указан при подписке<br /> 
            на новости Библиотеки инструментов Барановичи, <br />
            если Вы этого не делали, просто удалите это письмо, <br />
            если Вы хотите получать новости от Библиотеки инструментов,<br />
            <a style='text-decoration: none; color: red' href='#'>
            пройдите по ссылке для подтверждения. </a> </p>`
 };
  transporter.sendMail(mailOptions, (error) => {
       if (error) {
           return console.log(error);
       } else{
        res.send('200')
       }
    });
 })

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});