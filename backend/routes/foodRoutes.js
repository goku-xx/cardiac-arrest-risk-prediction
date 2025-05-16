const express = require("express");
const router = express.Router();
const foodController = require("../controllers/foodController");

router.post("/add", foodController.addFoodLog);
router.get("/:userId", foodController.getFoodLogs);

module.exports = router;
