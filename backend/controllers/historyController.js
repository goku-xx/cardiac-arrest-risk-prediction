// backend/controllers/historyController.js
const UserHistory = require("../models/UserHistory");

// Save prediction result to user history
exports.saveHistory = async (req, res) => {
  const { userId, inputData, predictionResult } = req.body;

  try {
    const newHistory = new UserHistory({ userId, inputData, predictionResult });
    await newHistory.save();
    res.status(201).json({ message: "History saved successfully." });
  } catch (error) {
    res.status(500).json({ message: "Error saving history.", error });
  }
};

// Get user history
exports.getHistory = async (req, res) => {
  const { userId } = req.params;

  try {
    const history = await UserHistory.find({ userId }).sort({ date: -1 });
    res.status(200).json(history);
  } catch (error) {
    res.status(500).json({ message: "Error fetching history.", error });
  }
};
