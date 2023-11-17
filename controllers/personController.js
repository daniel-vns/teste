const PersonModel = require("../models/Person");

const personController = {
  create: async (req, res) => {
    try {
      const person = {
        name: req.body.name,
        colors: req.body.colors,
        services: req.body.services,
      };
      const response = await PersonModel.create(person);
      res
        .status(201)
        .json({ response, message: "Person created successfully!!!" });
    } catch (error) {
      console.log(error);
    }
  },

  getAll: async (req, res) => {
    try {
      const people = await PersonModel.find();
      res.json(people);
    } catch (error) {
      console.log(error);
    }
  },

  get: async (req, res) => {
    try {
      const id = req.params.id;
      const person = await PersonModel.findById(id);
      res.json(person);
    } catch (error) {
      res.status(404).json({ message: "Person not found!!!" });
    }
  },

  delete: async (req, res) => {
    try {
      const id = req.params.id;
      const deletedPerson = await PersonModel.findByIdAndDelete(id);
      res
        .status(200)
        .json({ deletedPerson, message: "Person deleted successfuly!!!" });
    } catch (error) {
      res.status(404).json({ message: "Person not found!!!" });
    }
  },

  update: async (req, res) => {
    try {
      const id = req.params.id;
      const person = {
        name: req.body.name,
        colors: req.body.colors,
        services: req.body.services,
      };
      const updatedPerson = await PersonModel.findByIdAndUpdate(id, person);
      res.status(200).json({ person, message: "Person updated!!!" });
    } catch (error) {
      res.status(404).json({ message: "Person not found!!!" });
    }
  },
};

module.exports = personController;
