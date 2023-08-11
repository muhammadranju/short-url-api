const router = require("express").Router();
const urlController = require("../../controller/urlController/urlController");
// router.get("/:shortId", urlController.handelURLRedirectGetController);
router.post("/", urlController.handelURLPostController);

module.exports = router;
