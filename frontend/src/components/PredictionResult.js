import React from 'react';

const PredictionResult = ({ result }) => {
  if (!result) return null;

  return (
    <div>
      <h2>Prediction Result</h2>
      <p>Risk Level: {result.riskLevel}</p>
      <p>Risk Probability: {result.probability}%</p>
    </div>
  );
};

export default PredictionResult;
