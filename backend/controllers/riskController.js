const RiskScore = require("../models/RiskScore");

exports.addRiskScore = async (req, res) => {
  try {
    const score = new RiskScore(req.body);
    await score.save();
    res.status(201).json(score);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getLatestRiskScore = async (req, res) => {
  try {
    const score = await RiskScore.findOne({ user_id: req.params.userId }).sort({
      prediction_time: -1,
    });
    res.status(200).json(score);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
