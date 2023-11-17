const { Color: ColorModel } = require("../models/Color");

const colorController = {
  create: async (req, res) => {
    try {
      const color = {
        name: req.body.name,
        description: req.body.description,
      };
      const response = await ColorModel.create(color);
      res
        .status(201)
        .json({ response, message: "Color created successfully!!!" });
    } catch (error) {
      console.log(error);
    }
  },

  getAll: async (req, res) => {
    try {
      const colors = await ColorModel.find();
      res.json(colors);
    } catch (error) {
      console.log(error);
    }
  },

  get: async (req, res) => {
    try {
      const id = req.params.id;
      const color = await ColorModel.findById(id);
      res.json(color);
    } catch (error) {
      res.status(404).json({ message: "color not found!!!" });
    }
  },

  delete: async (req, res) => {
    try {
      const id = req.params.id;
      const deletedColor = await ColorModel.findByIdAndDelete(id);
      res
        .status(200)
        .json({ deletedColor, message: "Color deleted successfuly!!!" });
    } catch (error) {
      res.status(404).json({ message: "Color not found!!!" });
    }
  },

  update: async (req, res) => {
    try {
      const id = req.params.id;
      const color = {
        name: req.body.name,
        description: req.body.description,
      };
      const updatedColor = await ColorModel.findByIdAndUpdate(id, color);
      res.status(200).json({ color, message: "Color updated!!!" });
    } catch (error) {
      res.status(404).json({ message: "Color not found!!!" });
    }
  },
};

module.exports = colorController;
