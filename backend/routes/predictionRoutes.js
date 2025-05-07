// backend/routes/predictionRoutes.js
const express = require('express');
const router = express.Router();
const History = require('../models/History'); // Adjust path if needed

// Prediction route
router.post('/predict', async (req, res) => {
  const { saltIntake, physicalActivity, smoking, alcohol, bloodPressure, cholesterol, diabetes } = req.body;

  // Dummy prediction logic
  const prediction = {
    riskLevel: "High",
    probability: 85,
  };

  try {
    // Save to history
    const historyEntry = new History({
      saltIntake,
      physicalActivity,
      smoking,
      alcohol,
      bloodPressure,
      cholesterol,
      diabetes,
      result: prediction,
      createdAt: new Date()
    });

    await historyEntry.save(); // Save history to database

    res.status(200).json({
      prediction,
      message: "Prediction generated and history saved successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to save history" });
  }
});

module.exports = router;
