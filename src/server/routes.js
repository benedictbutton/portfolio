'use strict'
const express = require('express')
const rp = require('request-promise')
const nodemailer = require('nodemailer')

const router = express.Router()

router.post('/send', async (req, res) => {
    try {
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                type: 'OAuth2',
                user: process.env.USER,
                clientId: process.env.CLIENT_ID,
                clientSecret: process.env.CLIENT_SECRET,
                refreshToken: process.env.REFRESH_TOKEN,
                // accessToken: accessToken,
            },
        })

        transporter.verify(function (error, success) {
            if (error) throw 'New exception'
            else console.log('Server is ready to take our messages')
        })

        const mailOptions = {
            from: process.env.USER,
            to: 'benedictdaly@hotmail.com',
            text: `${req.body.message}`,
            replyTo: `${req.body.name} <${req.body.email}>`,
        }

        transporter.sendMail(mailOptions, function (err, res) {
            if (err) throw new Error(err)
            else console.log('here is the res: ', res)
        })
        res.status(200).json({ message: 'Email successfully sent' })
    } catch (err) {
        res.status(err.statusCode || 502).json(err.error || err)
    }
})

module.exports = router
