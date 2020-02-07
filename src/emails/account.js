const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'team@nathangappy.com',
    subject: 'Thanks for joining in!',
    text: `Welcome to the app, ${name}. Let me know how you like it.`
  });
};

const sendCancelEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'team@nathangappy.com',
    subject: 'Sorry to see you go',
    text: `Goodbye ${name}. We hope to see you again soon.`
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancelEmail
};
