// backend/controllers/predictionController.js
const axios = require("../utils/axiosClient");
const UserHistory = require("../models/UserHistory");

exports.predictRisk = async (req, res) => {
  try {
    const userData = req.body;
    const response = await axios.post("/predict", userData);
    const prediction = response.data;

    // Save prediction to user history
    await UserHistory.create({ ...userData, prediction });

    res.status(200).json(prediction);
  } catch (error) {
    console.error("Prediction Error:", error);
    res.status(500).json({ error: "Prediction failed." });
  }
};
