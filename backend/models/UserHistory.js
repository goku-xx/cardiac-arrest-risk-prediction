// backend/models/UserHistory.js
const mongoose = require("mongoose");

const UserHistorySchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  inputData: {
    type: Object,
    required: true,
  },
  predictionResult: {
    type: Object,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("UserHistory", UserHistorySchema);
