const mongoose = require("mongoose");
const sleepLogSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  sleep_start: Date,
  sleep_end: Date,
  sleep_quality: String,
  duration_minutes: Number,
  log_date: String,
});

module.exports = mongoose.model("SleepLog", sleepLogSchema);
