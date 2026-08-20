import { Schema, model } from "mongoose";

const meetingSchema = new Schema(
  {
    host: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    participations: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    meetingId: {
      type: String,
      required: true,
      unique: true,
      uppercase: true,
    },
    status: {
      type: String,
      enum: ["waiting", "ended", "active"],
      default: "waiting",
    },
    startedAt: {
      type: Date,
    },
    endedAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  },
);

export const Meeting = model("Meeting", meetingSchema);
