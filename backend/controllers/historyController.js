// backend/controllers/historyController.js
const UserHistory = require("../models/UserHistory");

exports.getUserHistory = async (req, res) => {
  try {
    const history = await UserHistory.find().sort({ timestamp: -1 });
    res.status(200).json(history);
  } catch (error) {
    console.error("History Retrieval Error:", error);
    res.status(500).json({ error: "Failed to retrieve history." });
  }
};
