const express = require("express");
const router = express.Router();

const assetsController = require("../controllers/assetsController");

router.post("/asset", assetsController.saveAsset);

router.get("/asset", assetsController.getAssets);

router.get("/asset/:id", assetsController.getAssets);

router.delete("/asset/:id", assetsController.deleteAsset);

router.put("/asset/:id", assetsController.saveAsset);

module.exports = router;
