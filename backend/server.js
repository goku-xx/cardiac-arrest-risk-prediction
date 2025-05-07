// backend/server.js
const express = require('express');
const app = express();
const cors = require('cors');
const appBase = require('./app');

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json()); // To parse JSON bodies

// Use base app routes
app.use(appBase);

app.post('/api/predict', (req, res) => {
  const { saltIntake, physicalActivity, smoking, alcohol, bloodPressure, cholesterol, diabetes } = req.body;
  
  // Here you would process the data (e.g., use ML model to make predictions)
  // For now, just return a sample response:
  const prediction = {
    riskLevel: 'High', // This would come from your model
    probability: 85, // This would come from your model
  };

  res.json(prediction); // Send prediction response to frontend
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
