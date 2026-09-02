import express from "express";
import { StatusCodes as s } from "http-status-codes";
const router = express.Router();

router.get("/login", (req, res) => {
  res.status(s.OK).send("user login the room");
});

router.post("/register-phone", (req, res) => {
  res.status(s.OK).send("user register the room");
});

router.get("/register-send-otp", (req, res) => {
  console.log("otp route working");
  res.status(s.OK).send("working");
});

export default router;
