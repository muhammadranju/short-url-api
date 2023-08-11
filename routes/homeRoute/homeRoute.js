const router = require("express").Router();
const homeController = require("../../controller/homeController/homeController");
const urls = require("../../controller/urlController/urlController");
router.get("/:shortId", urls.handelURLRedirectGetController);
module.exports = router;
