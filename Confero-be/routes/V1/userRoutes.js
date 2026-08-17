import express from "express";
import { StatusCodes as s } from "http-status-codes";
const router = express.Router();

router.get("/start", (req, res) => {
  res.status(s.OK).send("user entered the room");
});

router.get("/end", (req, res) => {
  res.status(s.OK).send("user leaved the room");
});

export default router;