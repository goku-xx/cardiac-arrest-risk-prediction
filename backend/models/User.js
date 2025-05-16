const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  gender: String,
  age: Number,
  dob: Date,
  email: String,
  height_cm: Number,
  weight_kg: Number,
  created_at: { type: Date, default: Date.now },
  last_updated: { type: Date, default: Date.now },
});

module.exports = mongoose.model("User", userSchema);
