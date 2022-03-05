const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    name: String,
    role: String,
    email: String,
    phone: String,
    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
    },
  },
  { collection: "users" }
);
const UsersModel = mongoose.model("Users", schema);

module.exports = UsersModel;
