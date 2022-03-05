const express = require("express");
const router = express.Router();

const assetsController = require("../controllers/assetsController");
const usersController = require("../controllers/usersController");

// ASSETS
router.post("/asset", assetsController.saveAsset);

router.get("/asset", assetsController.getAssets);

router.get("/asset/:id", assetsController.getAssets);

router.delete("/asset/:id", assetsController.deleteAsset);

router.put("/asset/:id", assetsController.saveAsset);

// USERS
router.post("/user", usersController.saveUser);

router.get("/user", usersController.getUsers);

router.get("/user/:id", usersController.getUsers);

router.delete("/user/:id", usersController.deleteUser);

router.put("/user/:id", usersController.saveUser);

module.exports = router;
