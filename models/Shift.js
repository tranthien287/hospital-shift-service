const mongoose = require("mongoose");

const shiftSchema = new mongoose.Schema({
  doctor: String,
  department: String,
  date: Date,
  shiftType: String, // morning, afternoon, night
  status: String, // available, busy
});

module.exports = mongoose.model("Shift", shiftSchema);
