import express from "express";
import { StatusCodes as status } from "http-status-codes";
import routeLogic from "./routes/routerLogic.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();
const router = express.Router();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);
const PORT = process.env.PORT;

app.use("/confero", routeLogic);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(status.OK + " " + "server is listening");
  });
});
