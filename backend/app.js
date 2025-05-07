// backend/app.js - Main Express Application Setup
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const predictionRoutes = require("./routes/predictionRoutes");
const historyRoutes = require("./routes/historyRoutes");

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Failed:", err));

// API Routes
app.use("/api/predict", predictionRoutes);
app.use("/api/history", historyRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
