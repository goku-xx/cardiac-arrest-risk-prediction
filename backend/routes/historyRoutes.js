// backend/routes/historyRoutes.js
const express = require("express");
const router = express.Router();
const History = require("../models/History");

// Fetch user history
router.get("/", async (req, res) => {
    try {
      console.log("Fetching history...");
      const history = await History.find().sort({ createdAt: -1 });
      console.log("History fetched:", history);
      res.json(history);
    } catch (err) {
      console.error("Failed to fetch history:", err);
      res.status(500).json({ error: "Failed to fetch history" });
    }
  });
  

module.exports = router;
