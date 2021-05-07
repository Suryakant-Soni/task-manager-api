const sgMail = require('@sendgrid/mail')

//const sendgridAPIKey = ''

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
sgMail.send({
    to: email,
    from: 'suryakantsonisap@gmail.com',
    subject: 'Thanks for joining this forum',
    text: `Welcome to the App, ${name}. Let me know how you get along with the App`
});

}

module.exports = {
    sendWelcomeEmail
}