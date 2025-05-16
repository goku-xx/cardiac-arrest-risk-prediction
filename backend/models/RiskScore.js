const mongoose = require("mongoose");
const riskScoreSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  date: String,
  risk_percentage: Number,
  factors_considered: Object,
  prediction_time: Date,
});

module.exports = mongoose.model("RiskScore", riskScoreSchema);
