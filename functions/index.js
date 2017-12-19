const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);


const nodemailer = require('nodemailer');
// const gmailEmail = encodeURIComponent(functions.config().gmail.email);
// const gmailPassword = encodeURIComponent(functions.config().gmail.password);
const mailTransport = nodemailer.createTransport({
    service: 'Gmail',
    secure: false,
    auth: {
      user: 'kostyaokylich@gmail.com',
      pass: '*********'
    }
  });


exports.sendContactMessage = functions.database.ref('/messages/{pushKey}').onWrite(event => {
  const snapshot = event.data;

  // Only send email for new messages.
  if (snapshot.previous.val() || !snapshot.val().name) {
    return;
  }
  
  const val = snapshot.val();
  const mailOptions = {
    from: 'developer',
    to: 'Okylich@tut.by',
    subject: `Information Request from ${val.name}`,
    html: val.html
  };

  return mailTransport.sendMail(mailOptions, function(error,info) {
      if(error){}
  })
});
