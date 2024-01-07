const express = require("express");
const router = express.Router();
const controller = require("../controllers/index");
router.get("/:configId", controller.createController);
router.put("/:configId", controller.updateController);

module.exports = router;
