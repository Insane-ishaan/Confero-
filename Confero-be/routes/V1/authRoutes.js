import express from "express";
import dotenv from "dotenv";
dotenv.config();
import { StatusCodes as s } from "http-status-codes";
import transporter from "../../config/mail.js";
const router = express.Router();
let genRatedOTP = 0;

router.get("/login", (req, res) => {
  res.status(s.OK).send("user login the room");
});

router.post("/register-phone", (req, res) => {
  res.status(s.OK).send("user register the room");
});

router.post("/register-send-otp", async (req, res) => {
  try {
    const { mail } = req.body;
    console.log(mail);
    genRatedOTP = Math.floor(100000 + Math.random() * 900000).toString();
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: mail,
      subject: "Confero OTP Verification",
      text: `Your OTP is ${genRatedOTP}. It expired in 5 minutes`,
    });
    res
      .status(s.OK)
      .json({ status: true, msg: `${genRatedOTP} OTP Sent Successfully ` });
  } catch (e) {
    res
      .status(s.BAD_REQUEST)
      .json({ status: false, msg: "Logic break due to " + e.message });
  }
});

router.post("/verify-otp", async (req, res) => {
  try {
    const { otp } = req.body;
    if (!genRatedOTP) {
      return res
        .status(s.NOT_FOUND)
        .json({ status: false, msg: "OTP Not Found" });
    }
    if (genRatedOTP !== otp) {
      return res.status(s.NOT_FOUND).json({ status: false, msg: "Invalid OTP" });
    }

    res.status(s.OK).json({ status: true, msg: "Email Verified Successfully" });
  } catch (e) {
    res.status(s.BAD_REQUEST).json({ status: false, msg: e.message });
  }
});

export default router;
