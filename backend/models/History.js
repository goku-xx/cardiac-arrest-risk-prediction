// backend/models/History.js
const mongoose = require('mongoose');

const historySchema = new mongoose.Schema({
  saltIntake: String,
  physicalActivity: String,
  smoking: String,
  alcohol: String,
  bloodPressure: String,
  cholesterol: String,
  diabetes: String,
  result: {
    riskLevel: String,
    probability: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('History', historySchema);
