const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

// Import routes
const userRoutes = require("./routes/userRoutes");
const foodRoutes = require("./routes/foodRoutes");
const sleepRoutes = require("./routes/sleepRoutes");
const stepRoutes = require("./routes/stepRoutes");
const riskRoutes = require("./routes/riskRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/food", foodRoutes);
app.use("/api/sleep", sleepRoutes);
app.use("/api/steps", stepRoutes);
app.use("/api/risk", riskRoutes);

module.exports = app;
