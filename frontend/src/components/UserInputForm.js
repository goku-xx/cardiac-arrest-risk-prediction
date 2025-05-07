// src/components/UserInputForm.js
import React, { useState } from "react";
import apiClient from "../utils/apiClient";

const UserInputForm = ({ userId }) => {
  const [formData, setFormData] = useState({
    age: "",
    gender: "",
    smoking: false,
    alcohol: false,
    exercise: "",
    diet: "",
    diabetes: false,
    cholesterol: "",
  });
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await apiClient.post("/predict", {
        ...formData,
        userId,
      });
      setResult(response.data);
    } catch (error) {
      console.error("Error making prediction:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-6 p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Cardiac Risk Prediction</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label>Age:</label>
          <input type="number" name="age" value={formData.age} onChange={handleChange} className="w-full p-2 border rounded" />
        </div>
        <div>
          <label>Gender:</label>
          <select name="gender" value={formData.gender} onChange={handleChange} className="w-full p-2 border rounded">
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div>
          <label>Smoking:</label>
          <input type="checkbox" name="smoking" checked={formData.smoking} onChange={handleChange} />
        </div>
        <div>
          <label>Alcohol:</label>
          <input type="checkbox" name="alcohol" checked={formData.alcohol} onChange={handleChange} />
        </div>
        <div>
          <label>Exercise (times/week):</label>
          <input type="number" name="exercise" value={formData.exercise} onChange={handleChange} className="w-full p-2 border rounded" />
        </div>
        <div>
          <label>Diet:</label>
          <input type="text" name="diet" value={formData.diet} onChange={handleChange} className="w-full p-2 border rounded" />
        </div>
        <div>
          <label>Diabetes:</label>
          <input type="checkbox" name="diabetes" checked={formData.diabetes} onChange={handleChange} />
        </div>
        <div>
          <label>Cholesterol:</label>
          <input type="text" name="cholesterol" value={formData.cholesterol} onChange={handleChange} className="w-full p-2 border rounded" />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Submit</button>
      </form>

      {result && (
        <div className="mt-4 p-4 bg-green-100 rounded">
          <h3 className="font-bold">Prediction Result:</h3>
          <p>Risk Level: {result.riskLevel}</p>
          <p>Recommendation: {result.recommendation}</p>
        </div>
      )}
    </div>
  );
};

export default UserInputForm;
