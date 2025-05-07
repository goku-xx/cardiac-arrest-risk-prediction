import React, { useEffect, useState } from "react";
import axios from "axios";

const HistoryList = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/history");
      setHistory(response.data);
    } catch (error) {
      console.error("Failed to fetch history:", error);
    }
  };

  return (
    <div>
      <h2>Prediction History</h2>
      {history.length === 0 ? (
        <p>No history available.</p>
      ) : (
        <ul>
          {history.map((item, index) => (
            <li key={index}>
              <strong>Risk Level:</strong> {item.result?.riskLevel} <br />
              <strong>Probability:</strong> {item.result?.probability}% <br />
              <strong>Date:</strong> {new Date(item.createdAt).toLocaleString()}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default HistoryList;
