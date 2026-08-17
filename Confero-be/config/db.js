import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const connectDB = async () => {
  try {
    console.log("db connected "+process.env.MONGO_URL)
    await mongoose.connect(process.env.MONGO_URL);
  } catch (e) {
    console.log(e.message);
  }
};
