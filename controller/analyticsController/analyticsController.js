const URL = require("../../models/urlModel/urlModel");
const handelAllAnalyticsGetController = async (req, res, next) => {
  try {
    const result = await URL.find();

    return res.status(200).json({
      totalClick: result.visitHistory,
      analytics: result,
    });
  } catch (error) {
    next(error);
  }
};
const handelAnalyticsGetController = async (req, res, next) => {
  try {
    const { shortId } = req.params;
    const result = await URL.findOne({ shortId });
    return res.status(200).json({
      totalClick: result.visitHistory.length,
      analytics: result.visitHistory,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  handelAllAnalyticsGetController,
  handelAnalyticsGetController,
};
