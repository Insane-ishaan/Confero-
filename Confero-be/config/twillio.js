import dotenv from "dotenv";
dotenv.config();
import twilio from "twilio";

export const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN,
);
