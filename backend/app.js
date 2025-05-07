// backend/app.js
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, {
}).then(() => console.log("MongoDB connected")).catch((err) => console.error("MongoDB connection error:", err));

// Routes
const predictionRoutes = require("./routes/predictionRoutes");
const historyRoutes = require("./routes/historyRoutes");

app.use("/api/prediction", predictionRoutes);
app.use("/api/history", historyRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the Cardiac Arrest Risk Prediction API");
});

module.exports = app;
