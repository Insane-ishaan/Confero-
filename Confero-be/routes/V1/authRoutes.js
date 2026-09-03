import express from "express";
import dotenv from "dotenv";
dotenv.config();
import { StatusCodes as s } from "http-status-codes";
import transporter from "../../config/mail.js";
const router = express.Router();

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
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    console.log(otp);
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: mail,
      subject: "Confero OTP Verification",
      text: `Your OTP is ${otp}. It expired in 5 minutes`,
    });
    res
      .status(s.OK)
      .json({ status: true, msg: `${otp} OTP Sent Successfully ` });
  } catch (e) {
    res
      .status(s.BAD_REQUEST)
      .json({ status: false, msg: "Logic break due to " + e.message });
  }
});

export default router;
