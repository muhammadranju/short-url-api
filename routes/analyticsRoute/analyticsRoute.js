const router = require("express").Router();
const analyticsController = require("../../controller/analyticsController/analyticsController");
router.get("/:shortId", analyticsController.handelAnalyticsGetController);
router.get("/", analyticsController.handelAllAnalyticsGetController);
module.exports = router;
