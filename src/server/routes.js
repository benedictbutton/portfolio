"use strict";
const express = require("express");
const rp = require("request-promise");
const nodemailer = require("nodemailer");

const router = express.Router();

router.post("/send", async (req, res) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        type: "OAuth2",
        user: process.env.USER,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN
      }
    });

    transporter.verify(function(error, success) {
      if (error) {
        console.log(error);
      } else {
        console.log("Server is ready to take our messages");
      }
    });

    // user: process.env.USER,
    // pass: process.env.PASS,
    // host: "smtp.office365.com",

    const mailOptions = {
      from: process.env.USER,
      to: "benedictdaly@hotmail.com",
      text: `${req.body.message}`,
      replyTo: `${req.body.email}`
    };

    transporter.sendMail(mailOptions, function(err, res) {
      if (err) {
        console.error("there was an error: ", err);
      } else {
        console.log("here is the res: ", res);
      }
    });
  } catch (err) {
    res.status(err.statusCode || 502).json(err.error || err);
  }
});

module.exports = router;
