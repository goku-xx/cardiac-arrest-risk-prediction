// backend/routes/predictionRoutes.js
const express = require("express");
const { predictRisk } = require("../controllers/predictionController");
const router = express.Router();

router.post("/", predictRisk);

module.exports = router;
