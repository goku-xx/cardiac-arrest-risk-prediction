const StepLog = require("../models/StepLog");

exports.addStepLog = async (req, res) => {
  try {
    const log = new StepLog(req.body);
    await log.save();
    res.status(201).json(log);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getStepLogs = async (req, res) => {
  try {
    const logs = await StepLog.find({ user_id: req.params.userId });
    res.status(200).json(logs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
