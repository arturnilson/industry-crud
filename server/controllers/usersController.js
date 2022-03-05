const usersModel = require("../models/usersModel");

const usersController = {
  saveUser: async (req, res) => {
    try {
      const { name, role, email, phone } = req.body;
      const id = req.params.id;

      if (id) {
        await usersModel.findByIdAndUpdate(id, {
          $set: {
            name,
            role,
            email,
            phone,
            company
          },
        });

        res.json({ message: "User updated successfully." });

        return;
      }

      const saveUser = new usersModel({
        name,
        role,
        email,
        phone,
        company
      });

      await saveUser.save((err, response) => {
        if (err) res.json({ code: err.code, message: err.message });
      });

      res.json({ message: "User saved successfully." });
    } catch (error) {
      res.json({ code: error.code, message: error.message });
    }
  },

  getUsers: async (req, res, next) => {
    try {
      const allUsers = await usersModel.find();

      res.json({ allUsers: allUsers });
    } catch (error) {
      res.json({ code: error.code, message: error.message });
    }
  },

  deleteUser: async (req, res, next) => {
    try {
      const id = req.params.id;
      await usersModel.deleteOne({ _id: id });

      res.json({ message: "User deleted successfully." });
    } catch (error) {
      res.json({ code: error.code, message: error.message });
    }
  },
};

module.exports = usersController;
