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
        user: "benedictdaly@gmail.com",
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        accessToken:
          "ya29.GlskB6Dh5lYyJa7q7I1ADidXEtCgyOi61khd_i1lnfTWLgCpRmGXhpFsBVi0XzvP1YF2e9XSO0_9KeErXKEhyuRCdkfzrd25pztJ18mTj0wCHI8rT1ZL_-LPnPk-",
        refreshToken: "1/ZgOMbc2exLXtMEAX3mOFtcC61ThD3LVtPOnZ_Ix_NQc"
      }
    });

    // user: process.env.USER,
    // pass: process.env.PASS,
    // host: "smtp.office365.com",

    const mailOptions = {
      from: `${req.body.name}`,
      to: process.env.USER,
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
