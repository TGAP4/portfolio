const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const transporter = nodemailer.createTransport({
    host: 'smtp.mailgun.org',
    port: 587,
    auth: {
        user: process.env.MAILGUN_USER,
        pass: process.env.MAILGUN_PASS
    }
});

app.post('/submit', (req, res) => {
    transporter.sendMail({
        to: process.env.FORWARDING_EMAIL,
        subject: 'From Developer Portfolio',
        text: `Name: ${req.body[0]} Email: ${req.body[1]}\nMessage: ${req.body[2]}`
    })
    res.json('Success');
})

app.listen(process.env.PORT);