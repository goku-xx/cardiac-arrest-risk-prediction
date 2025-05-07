// backend/models/UserHistory.js
const mongoose = require("mongoose");

const UserHistorySchema = new mongoose.Schema({
  age: Number,
  gender: String,
  bloodPressure: Number,
  cholesterol: Number,
  diabetes: Boolean,
  saltIntake: String,
  processedFood: Boolean,
  prediction: Object,
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model("UserHistory", UserHistorySchema);
