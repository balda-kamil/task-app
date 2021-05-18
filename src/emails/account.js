const sgMail = require('@sendgrid/mail')
require('dotenv').config()

const sendgripdAPIKey = process.env.sendgripdAPIKey

sgMail.setApiKey(sendgripdAPIKey)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'kamil@awwwokado.net',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    }).then(() => console.log('Welcome email sent!')).catch(e => console.log(e.response.body))
}

const sendGoodbyeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'kamil@awwwokado.net',
        subject: 'I wish you were leaving us',
        text: `Hi ${name}. I hope we'll meet again.`
    }).then(() => console.log('Goodbye email sent!')).catch(e => console.log(e.response.body))
}

module.exports = {
    sendWelcomeEmail,
    sendGoodbyeEmail
}
