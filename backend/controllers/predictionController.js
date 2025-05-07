// backend/controllers/predictionController.js
exports.predictRisk = (req, res) => {
    const { saltIntake, physicalActivity, smoking, alcohol, bloodPressure, cholesterol, diabetes } = req.body;
    
    // Placeholder ML prediction logic
    const prediction = {
      riskLevel: 'High',
      probability: 85,
    };
  
    res.json(prediction);
  };
  