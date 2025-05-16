const mongoose = require("mongoose");
const stepLogSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  steps_count: Number,
  log_date: String,
  source: String,
});

module.exports = mongoose.model("StepLog", stepLogSchema);
