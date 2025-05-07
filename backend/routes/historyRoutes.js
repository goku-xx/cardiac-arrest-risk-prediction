// backend/routes/historyRoutes.js
const express = require("express");
const { getUserHistory } = require("../controllers/historyController");
const router = express.Router();

router.get("/", getUserHistory);

module.exports = router;
