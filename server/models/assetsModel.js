const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    image: String,
    name: String,
    description: String,
    model: String,
    owner: String,
    status: { type: Number, min: 0, max: 2 },
    health: { type: Number, min: 0, max: 100 },
  },
  { collection: "assets" }
);
const AssetsModel = mongoose.model("Assets", schema);

module.exports = AssetsModel;
