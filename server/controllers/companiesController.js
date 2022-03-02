const companiesModel = require("../models/companiesModel");

const companiesController = {
  saveCompany: async (req, res) => {
    try {
      const { id } = req.body;

      const saveCompany = new companiesModel({
        id: id,
        // unit: new unitModel({}), 
        // user: new userModel({})
      });

      await saveCompany.save((err, response) => {
        if (err) res.json({ code: err.code, message: err.message });

        res.json({ message: "Company saved successfully." });
      });
    } catch (error) {
      res.json({ code: error.code, message: error.message });
    }
  },

  getCompanies: async (req, res, next) => {
    try {
      const allCompanies = await companiesModel.find();

      res.json({ allCompanies: allCompanies });
    } catch (error) {
      res.json({ code: error.code, message: error.message });
    }
  },

  deleteCompany: async (req, res, next) => {
    try {
      const id = req.params.id;
      await companiesModel.deleteOne({ _id: id });

      res.json({ message: "Company deleted successfully." });
    } catch (error) {
      res.json({ code: error.code, message: error.message });
    }
  },
};

module.exports = companiesController;
