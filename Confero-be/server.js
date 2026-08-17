import express from "express";
import { StatusCodes as status } from "http-status-codes";
const app = express();

app.get("/", (req, res) => {
  res.status(status.OK).send("hello");
});

app.listen(8080, (req, res) => {
  console.log(status.OK + " " + "server is listening");
});
