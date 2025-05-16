const express = require("express");
const router = express.Router();
const riskController = require("../controllers/riskController");

router.post("/add", riskController.addRiskScore);
router.get("/:userId", riskController.getLatestRiskScore);

module.exports = router;
