exports.addFoodLog = async (req, res) => {
  try {
    const log = new FoodLog(req.body);
    await log.save();
    res.status(201).json(log);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getFoodLogs = async (req, res) => {
  try {
    const logs = await FoodLog.find({ user_id: req.params.userId });
    res.status(200).json(logs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
