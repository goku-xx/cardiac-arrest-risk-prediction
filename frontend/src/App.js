import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import UserInputForm from "./components/UserInputForm";
import PredictionResult from "./components/PredictionResult";
import HistoryList from "./components/HistoryList";

function App() {
  const [predictionResult, setPredictionResult] = useState(null);
  const userId = "user123"; // Replace with dynamic user ID if needed

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <div className="p-4 max-w-3xl mx-auto">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <h1 className="text-3xl font-bold mb-4 text-center">Cardiac Arrest Risk Prediction</h1>
                  <UserInputForm setPredictionResult={setPredictionResult} />
                  <PredictionResult result={predictionResult} />
                </>
              }
            />
            <Route
              path="/history"
              element={<HistoryList userId={userId} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
