import bcrypt from "bcrypt";
import dotenv from "dotenv";
dotenv.config();
import jwt from "jsonwebtoken";
import { StatusCodes as s } from "http-status-codes";
import { User } from "../model/schemas/userSchema.js";

export const RegisterLogic = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(s.BAD_REQUEST).json({ msg: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res
        .status(s.EXPECTATION_FAILED)
        .json({ msg: "User already exists" });
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      passwordHash,
    });

    res.status(s.OK).json({ msg: user.name + "has registered successfully" });
  } catch (e) {
    console.log(e);
    res.status(s.INTERNAL_SERVER_ERROR).json({ msg: "Server error" });
  }
};

export const LoginLogic = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({
      email,
    });

    if (!user) {
      return res
        .status(s.FORBIDDEN)
        .json({ json: "Invalid email or password" });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.passwordHash);

    if (!isPasswordCorrect) {
      return res
        .status(s.BAD_REQUEST)
        .json({ msg: "Invalid email or password" });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_TOKEN, {
      expiresIn: "7d",
    });

    res.status(s.ACCEPTED).json({ msg: "Login Completed", token: token });
  } catch (e) {
    res.status(s.INTERNAL_SERVER_ERROR).json({ msg: "Something went wrong" });
  }
};
