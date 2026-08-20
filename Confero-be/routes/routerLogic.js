import express from "express";
import { StatusCodes as s } from "http-status-codes";
import V1userRoutes from "./V1/v1RouterLogic.js";

const router = express.Router();

router.use("/v1", V1userRoutes);

export default router;
