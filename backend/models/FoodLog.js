const mongoose = require("mongoose");
const foodLogSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  meal_type: String,
  food_items: [String],
  log_time: Date,
  notification_time: Date,
  delay_minutes: Number,
});

module.exports = mongoose.model("FoodLog", foodLogSchema);
