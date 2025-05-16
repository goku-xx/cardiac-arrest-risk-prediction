const express = require("express");
const router = express.Router();
const sleepController = require("../controllers/sleepController");

router.post("/add", sleepController.addSleepLog);
router.get("/:userId", sleepController.getSleepLogs);

module.exports = router;
