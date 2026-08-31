import express from "express";
import { StatusCodes as s } from "http-status-codes";
const router = express.Router();

router.get("/login", (req, res) => {
  res.status(s.OK).send("user login the room");
});

router.post("/register-phone", (req, res) => {
  res.status(s.OK).send("user register the room");
});

export default router;
