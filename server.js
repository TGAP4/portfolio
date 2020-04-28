const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use(express.static('build/'));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build/', 'index.html'));
});

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
        text: `Name: ${req.body[0]}\nEmail: ${req.body[1]}\nMessage: ${req.body[2]}`
    })
    res.json('Success');
})

app.listen(process.env.PORT || 3000);
