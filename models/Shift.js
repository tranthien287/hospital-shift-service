const mongoose = require("mongoose");

const shiftSchema = new mongoose.Schema(
  {
    doctorName: {
      type: String,
      required: true,
    },
    department: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    startTime: {
      type: String, // ví dụ "08:00"
      required: true,
    },
    endTime: {
      type: String, // ví dụ "16:00"
      required: true,
    },
    status: {
      type: String,
      enum: ["scheduled", "completed", "cancelled"],
      default: "scheduled",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Shift", shiftSchema);
