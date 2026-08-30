import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      maxlength: 10,
    },
    email: {
      type: String,
      trim: true,
      unique: true,
      sparse: true,
      lowercase: true,
      match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    },
    phone: {
      type: String,
      unique: true,
      sparse: true,
    },

    passwordHash: {
      type: String,
    },

    googleId: {
      type: String,
      unique: true,
      sparse: true,
    },

    phoneVerified: {
      type: Boolean,
      default: false,
    },

    role: {
      type: String,
      enum: ["admin", "participant"],
      default: "participant",
    },
  },
  {
    timestamps: true,
  },
);

export const User = model("User", userSchema);
