const assetsModel = require("../models/assetsModel");

const assetsController = {
  saveAsset: async (req, res) => {
    try {
      const { name, description, model, owner, status, health } = req.body;
      const id = req.params.id;

      if (id) {
        await assetsModel.findByIdAndUpdate(id, {
          $set: {
            name: name,
            description: description,
            model: model,
            owner: owner,
            status: status,
            health: health,
          },
        });

        res.json({ message: "Asset updated successfully." });

        return;
      }

      const saveAsset = new assetsModel({
        name: name,
        description: description,
        model: model,
        owner: owner,
        status: status,
        health: health,
      });

      await saveAsset.save((err, response) => {
        if (err) res.json({ code: err.code, message: err.message });
      });

      res.json({ message: "Asset saved successfully." });
    } catch (error) {
      res.json({ code: error.code, message: error.message });
    }
  },

  getAssets: async (req, res, next) => {
    try {
      const allAssets = await assetsModel.find();

      res.json({ allAssets: allAssets });
    } catch (error) {
      res.json({ code: error.code, message: error.message });
    }
  },

  deleteAsset: async (req, res, next) => {
    try {
      const id = req.params.id;
      await assetsModel.deleteOne({ _id: id });

      res.json({ message: "Asset deleted successfully." });
    } catch (error) {
      res.json({ code: error.code, message: error.message });
    }
  },
};

module.exports = assetsController;
