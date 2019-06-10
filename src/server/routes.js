"use strict";
const express = require("express");
const rp = require("request-promise");
const nodemailer = require("nodemailer");
const xoauth2 = require("xoauth2");

const router = express.Router();

router.post("/send", async (req, res) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        xoauth2: xoauth2.createXOAuth2Generator({
          user: process.env.USER,
          clientId: process.env.CLIENT_ID,
          clientSecret: process.env.CLIENT_SECRET,
          accessToken:
            "ya29.GlskB6Dh5lYyJa7q7I1ADidXEtCgyOi61khd_i1lnfTWLgCpRmGXhpFsBVi0XzvP1YF2e9XSO0_9KeErXKEhyuRCdkfzrd25pztJ18mTj0wCHI8rT1ZL_-LPnPk-",
          refreshToken: "1/ZgOMbc2exLXtMEAX3mOFtcC61ThD3LVtPOnZ_Ix_NQc"
        })
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
