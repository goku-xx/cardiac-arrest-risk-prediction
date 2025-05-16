const SleepLog = require("../models/SleepLog");

exports.addSleepLog = async (req, res) => {
  try {
    const log = new SleepLog(req.body);
    await log.save();
    res.status(201).json(log);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getSleepLogs = async (req, res) => {
  try {
    const logs = await SleepLog.find({ user_id: req.params.userId });
    res.status(200).json(logs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
