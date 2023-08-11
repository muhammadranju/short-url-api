const router = require("express").Router();

router.use(require("./homeRoute/homeRoute"));
router.use("/url", require("./urlRoute/urlRoute"));
router.use("/urls/analytics/", require("./analyticsRoute/analyticsRoute"));

module.exports = router;
