const { Service: ServiceModel } = require("../models/Service");

const serviceController = {
  create: async (req, res) => {
    try {
      const service = {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
      };
      const response = await ServiceModel.create(service);
      res
        .status(201)
        .json({ response, message: "Service created successfully!!!" });
    } catch (error) {
      console.log(error);
    }
  },

  getAll: async (req, res) => {
    try {
      const services = await ServiceModel.find();
      res.json(services);
    } catch (error) {
      console.log(error);
    }
  },

  get: async (req, res) => {
    try {
      const id = req.params.id;
      const service = await ServiceModel.findById(id);
      res.json(service);
    } catch (error) {
      res.status(404).json({ message: "Service not found!!!" });
    }
  },

  delete: async (req, res) => {
    try {
      const id = req.params.id;
      const deletedService = await ServiceModel.findByIdAndDelete(id);
      res
        .status(200)
        .json({ deletedService, message: "Service deleted successfuly!!!" });
    } catch (error) {
      res.status(404).json({ message: "Service not found!!!" });
    }
  },

  update: async (req, res) => {
    try {
      const id = req.params.id;
      const service = {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
      };
      const updatedService = await ServiceModel.findByIdAndUpdate(id, service);
      res.status(200).json({ service, message: "Service updated!!!" });
    } catch (error) {
      res.status(404).json({ message: "Service not found!!!" });
    }
  },
};

module.exports = serviceController;
