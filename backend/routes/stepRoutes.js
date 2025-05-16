const express = require("express");
const router = express.Router();
const stepController = require("../controllers/stepController");

router.post("/add", stepController.addStepLog);
router.get("/:userId", stepController.getStepLogs);

module.exports = router;
